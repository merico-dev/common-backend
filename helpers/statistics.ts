import moment from 'moment-timezone';
import * as _ from 'lodash';
import { Moment } from 'moment';
import { StatisticsHelper } from "./statisticsHelper";
import { ValueIterator } from "./ValueIterator";
import { newMemCache, getOrRecompute } from './cacheUtils';
import { ApiError } from './errors';
import { allowTimezoneNameStrs } from "./timezoneNames";
import { INVALID_VALUE } from './errors'
import { getServices } from "./services";

type GroupTable<T> = { [any: string]: Partial<T>[] | GroupTable<T> };

export class Statistics {
  public static async getFormatLastPeriod() {

  }

  // public async getTeamUserTimezone(em: any, loginTeamUser: any) {
  //   let timezoneName = await services.config.get(em, 'vdev/user/timezone', { teamUserId: loginTeamUser.id, defaultValue: 'UTC' });
  //   if (!allowTimezoneNameStrs.includes(timezoneName)) {
  //     throw new ApiError({ message: 'timezoneName must in allowTimezoneNameStrs!' });
  //   }
  //   return timezoneName;
  // }

  // 获取某个人某时刻某个项目的devEq
  public static async getDevEqByTeamUserIdByTime(
    idTuples: {
      teamUserId: string,
      primaryEmail: string,
      date: Date,
      projectId: string,
      latestReportId: string,
    }[]
  ): Promise<{
    [idTupleJoin: string]: number,
  }> {
    if (idTuples.length == 0) {
      return {};
    }

    const memCache = newMemCache();

    let result: { teamUserId, date, projectId, value: number }[] = await Promise.all(idTuples.map(async ({ teamUserId, primaryEmail, date, projectId, latestReportId }) => {
      // latestReportId = latestReportId ?? (await Project.findOneOrFail(projectId)).latestReportId;
      // primaryEmail = primaryEmail ?? await getServices().teamService.getPrimaryEmailByTeamUser(getManager(), { id: teamUserId });
      const distribution = await getOrRecompute(memCache, `${latestReportId}:${date.getTime()}`,
        async () => await getServices().reportService.getDevEqDistributionAtTime(latestReportId, date));
      return { teamUserId, date, projectId, value: distribution[primaryEmail]?.dev_equivalent ?? 0 };
    }));

    let resultObject = {};
    for (let item of result) {
      resultObject[item.teamUserId + item.projectId + item.date.toISOString()] = item.value;
    }
    return resultObject;
  }

  // 把查询出来的数据按照devEq加权平均
  public static mergeMetricByDevEq<T extends { team_user_id, report_id, project_id, date, value }>(
    metricGroupTable: {
      [teamUserId: string]: T[],
    },
    devEqData: {
      [idTupleJoin: string]: number,
    }
  ) {
    for (let groupKey in metricGroupTable) {
      for (let dateData of metricGroupTable[groupKey]) {
        let devEqSum = 0;
        let avgSum = 0.0;
        let itemList: { team_user_id, report_id, project_id, date: Date, value }[] = dateData.value;
        for (let item of itemList) {
          let itemDevEq = devEqData[item.team_user_id + item.project_id + item.date.toISOString()];
          if (itemDevEq) {
            devEqSum += itemDevEq;
            avgSum += item.value * itemDevEq;
          }
        }
        dateData.value = avgSum / devEqSum;
      }
    }
    return metricGroupTable;
  }

  // 把查询出来的数据按照分子分母分别相加平均， denominator 分母， numerator 分子
  // FIXME 这里面还很low的，根据同一个时间片同一个projectId只保留一个
  public static mergeMetricByFraction<T extends { team_user_id, report_id, project_id, date, value, }>(
    metricGroupTable: {
      [teamUserId: string]: T[],
    },
    ifZeroDenominatorNan = false,
  ) {
    for (let teamUserId in metricGroupTable) {
      for (let dateData of metricGroupTable[teamUserId]) {
        let denominator = 0.0;
        let numerator = 0.0;
        let itemList: { team_user_id, report_id, project_id, date: Date, denominator, numerator }[] = dateData.value;
        let projectIdSet = new Set();
        for (let item of itemList) {
          if (projectIdSet.has(item.project_id)) {
            continue;
          }
          projectIdSet.add(item.project_id);
          denominator += item.denominator;
          numerator += item.numerator;
        }
        dateData.value = numerator > 0 ? numerator / denominator : (ifZeroDenominatorNan ? NaN : 0);
      }
    }
    return metricGroupTable;
  }

  // 用rows和mapKeys构造多级的group
  public static buildGroupTableByRows<T, K extends keyof T>(
    items: T[],
    ...mapKeyObjects: (K | {
      mapKey: K,
      allSubKeys?: any[],
      keepMapKey?: boolean,
      subKeyFormat?: (items: any) => string,
      formatFunc?: (items: Partial<T>[]) => Partial<T>[],
    })[]
  ): GroupTable<T> {
    let tmpGroup: { [any: string]: Partial<T>[] } = {};
    let mapKeyObject = mapKeyObjects.shift();
    if (typeof mapKeyObject !== 'object') {
      mapKeyObject = { mapKey: mapKeyObject }
    }

    // 如果有allSubKeys，根据其填充节点
    if (mapKeyObject.allSubKeys) {
      for (let subKey of mapKeyObject.allSubKeys) {
        subKey = mapKeyObject.subKeyFormat ? mapKeyObject.subKeyFormat(subKey) : subKey;
        tmpGroup[subKey] = [];
      }
    }

    // 根据key取出值并填充
    for (let item of items) {
      let subKey = String(item[mapKeyObject.mapKey]);
      subKey = mapKeyObject.subKeyFormat ? mapKeyObject.subKeyFormat(subKey) : subKey;
      if (!mapKeyObject.keepMapKey) {
        delete item[mapKeyObject.mapKey];
      }
      if (!tmpGroup[subKey]) {
        tmpGroup[subKey] = [];
      }
      tmpGroup[subKey].push(item)
    }

    let result: GroupTable<T> = {};
    for (let formatedSubKey in tmpGroup) {
      // 使用formatFunc格式化
      let newItems = mapKeyObject.formatFunc ? mapKeyObject.formatFunc(tmpGroup[formatedSubKey]) : tmpGroup[formatedSubKey];
      // 递归格式化子级
      result[formatedSubKey] = mapKeyObjects.length > 0 ? this.buildGroupTableByRows(newItems, ...mapKeyObjects) : newItems;
    }
    return result;
  }

  // 把数据按照所需的时间片段格式化
  public static formatByTimePeriod<T extends { date?: string, value?: number, }>(
    items: T[],
    periodOption: GroupPeriodOption,
    timezoneName: string = 'UTC',
    startDate: Date,
    endDate: Date,
    options: {
      // 相同时间片合并方式
      samePeriodMergeType?: 'sum' | 'drop' | 'replace' | 'array',
    } = {},
  ): { date: string, value: number, }[] | T[] {
    // 把已有的数据放到各自的时间单位中
    let groupedDataMap = {};
    for (let item of items) {
      let startOfitemTimeUnix = moment.tz(item.date, timezoneName).startOf(periodOption.unitOfTime).unix();
      if (!groupedDataMap[startOfitemTimeUnix]) {
        groupedDataMap[startOfitemTimeUnix] = [];
      }
      if (item) {
        groupedDataMap[startOfitemTimeUnix].push(item);
      }
    }

    // 从开始到最后，一个个时间片查询并收集数据
    let groupedDataTable = [];
    let currentMoment = moment(startDate).tz(timezoneName).startOf(periodOption.unitOfTime);
    let endMoment = moment(endDate).tz(timezoneName).endOf(periodOption.unitOfTime);
    while (currentMoment.isBefore(endMoment)) {
      let date = currentMoment.toDate();

      // 根据合并类型初始化value
      let value;
      switch (options.samePeriodMergeType) {
        case "replace":
        case "drop":
          value = null;
          break;
        case "array":
          value = [];
          break;
        case "sum":
        default:
          value = 0;
      }

      // 依次处理所有收集的数据
      for (let i = 0; i < periodOption.unitNumber; i++) {
        if (!groupedDataMap[currentMoment.unix()]) {
          currentMoment.add(1, periodOption.unitOfTime);
          continue;
        }
        for (let item of groupedDataMap[currentMoment.unix()]) {
          switch (options.samePeriodMergeType) {
            case "replace":
              value = item;
              break;
            case "drop":
              if (!value) {
                value = item;
              }
              break;
            case "array":
              value.push(item);
              break;
            case "sum":
            default:
              value += item.value || 0;
          }
        }
        currentMoment.add(1, periodOption.unitOfTime);
      }
      groupedDataTable.push({ date, value, });
    }
    return groupedDataTable;
  }

  // 增加累计数据
  public static makeDataSetsToAccumulateResult(
    dataSets: { project?; group?; developer?; series: { date?; value }[]; avg?: number; standardDeviation?; }[],
    accumulateResult: { project_id?; group_id?; primary_email?; value }[]) {
    let accumulateResultMap = {};
    accumulateResult.forEach(item => accumulateResultMap[item.project_id || item.group_id || item.primary_email] = item.value);

    for (let item of dataSets) {
      let accumulateBase = accumulateResultMap[item.group?.id || item.project?.id || item.developer?.primaryEmail] || 0;
      item.avg = NaN;
      item.standardDeviation = NaN;
      for (let i in item.series) {
        accumulateBase = item.series[i].value = accumulateBase + item.series[i].value;
      }
    }
  }

  // 从数据中计算出标准差
  // https://baike.baidu.com/item/%E6%96%B9%E5%B7%AE/3108412?fr=aladdin
  getStandardDeviation(
    dataSets: { dataSet: Array<number | { value: number }>, }[],
    avg: number,
  ) {
    if (dataSets.length < 1) {
      return NaN;
    }

    let squareSum = 0, count = 0;
    dataSets.forEach(v => {
      v.dataSet.forEach(v2 => {
        squareSum += Math.pow((typeof v2 == 'object' ? v2?.value : v2) - avg, 2);
        count++;
      });
    });

    // 方差
    let variance = squareSum / count;
    // 标准差
    return Math.sqrt(variance);
  }

  // 获取统计学上下限
  getStatisticsLimit(
    dataSets: { dataSet: Array<number | { value: number }>, }[],
    avg: number,
  ): [number, number,] {
    if (dataSets.length < 1) {
      return [NaN, NaN,];
    }
    let standardDeviation = this.getStandardDeviation(dataSets, avg);
    // FIXME 暂时用2倍标准差作为上下限，而不用离散度
    // let dispersion = standardDeviation / avg;
    // let diff;
    // if (dispersion <= 0.3) {
    //   diff = 3 * standardDeviation;
    // } else if (dispersion <= 0.6) {
    //   diff = 1.96 * standardDeviation;
    // } else {
    //   diff = NaN;
    // }
    let diff = 2 * standardDeviation;
    let maxLimit = avg + diff;
    let minLimit = avg - diff;
    if (minLimit < 0) {
      minLimit = 0;
    }
    return [minLimit, maxLimit];
  }

  // 从数据中计算出平均值
  public static getAvg(
    data: object[],
    avgKey: string,) {
    if (data.length < 1) {
      return NaN;
    }
    let s = 0;
    data.forEach(v => s += v[avgKey]);
    return s / data.length;
  }

  // 获取统计学上下限
  public static getStatisticsValue(
    records: { series: Array<{ value: number }>, }[],
  ): { avg: number, minLimit: number, maxLimit: number, standardDeviation: number, } {
    if (records.length < 1) {
      return { avg: NaN, minLimit: NaN, maxLimit: NaN, standardDeviation: NaN, };
    }
    let values = new ValueIterator(
      records,
      item => {
        return item.series
          .map(v2 => typeof v2 == 'object' ? v2?.value : v2)
          .filter(it => it !== 0);
      },
    );
    let avg = StatisticsHelper.avg(values);
    let standardDeviation = StatisticsHelper.standardDeviation(values, avg,);
    // FIXME 暂时用2倍标准差作为上下限，而不用离散度
    // let dispersion = standardDeviation / avg;
    // let diff;
    // if (dispersion <= 0.3) {
    //   diff = 3 * standardDeviation;
    // } else if (dispersion <= 0.6) {
    //   diff = 1.96 * standardDeviation;
    // } else {
    //   diff = NaN;
    // }
    let diff = 2 * standardDeviation;
    let maxLimit = avg + diff;
    let minLimit = avg - diff;
    if (minLimit < 0) {
      minLimit = 0;
    }
    return { avg, minLimit, maxLimit, standardDeviation, };
  }
}

export class FilterTimeOption  {
  name: 'filter-time';
  startDate: Date;
  startDateMoment: Moment;
  endDate: Date;
  endDateMoment: Moment;
  constructor(timezoneName, startDate: Date | string, endDate: Date | string) {
    if (!allowTimezoneNameStrs.includes(timezoneName)) {
      throw new ApiError(INVALID_VALUE, { message: 'timezoneName must in allowTimezoneNameStrs!', });
    }
    if (!startDate) {
      throw new ApiError(INVALID_VALUE, { message: 'startDate require!' });
    }
    if (!endDate) {
      throw new ApiError(INVALID_VALUE, { message: 'endDate require!' });
    }
    this.startDateMoment = moment.tz(startDate, timezoneName).startOf('day');
    this.endDateMoment = moment.tz(endDate, timezoneName).endOf('day');
    this.startDate = this.startDateMoment.toDate();
    this.endDate = this.endDateMoment.toDate();
    if (this.endDateMoment.isBefore(this.startDateMoment)) {
      throw new ApiError(INVALID_VALUE, { message: 'startDate must before endDate' });
    }
  }
}

export class GroupPeriodOption  {
  name: 'group-period';
  unitNumber: number;
  unitOfTime: 'day' | 'week' | 'month' | 'quarter' | 'year';
  constructor(unitNumber: number, unitOfTime: 'day' | 'week' | 'month' | 'quarter' | 'year') {
    let allowUnitNumber = { day: 31, week: 52, month: 12, quarter: 4, year: 1, };
    if (typeof unitNumber !== 'number') {
      throw new ApiError(INVALID_VALUE, { message: 'unitNumber must be a number' });
    }
    if (!allowUnitNumber[unitOfTime]) {
      throw new ApiError(INVALID_VALUE, { message: 'unitOfTime invalid' });
    }
    if (unitNumber <= 0) {
      throw new ApiError(INVALID_VALUE, { message: 'unitNumber must >0' });
    }
    if (unitNumber > allowUnitNumber[unitOfTime]) {
      throw new ApiError(INVALID_VALUE, { message: `unitOfTime must < ${allowUnitNumber[unitOfTime]} when ${unitOfTime}` });
    }
    this.unitNumber = unitNumber;
    this.unitOfTime = unitOfTime;
  }
}
