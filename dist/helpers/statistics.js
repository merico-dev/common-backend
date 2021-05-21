"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPeriodOption = exports.FilterTimeOption = exports.Statistics = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const statisticsHelper_1 = require("./statisticsHelper");
const ValueIterator_1 = require("./ValueIterator");
const cacheUtils_1 = require("./cacheUtils");
const errors_1 = require("./errors");
const timezoneNames_1 = require("./timezoneNames");
const errors_2 = require("./errors");
const services_1 = require("./services");
class Statistics {
    static async getFormatLastPeriod() {
    }
    // public async getTeamUserTimezone(em: any, loginTeamUser: any) {
    //   let timezoneName = await services.config.get(em, 'vdev/user/timezone', { teamUserId: loginTeamUser.id, defaultValue: 'UTC' });
    //   if (!allowTimezoneNameStrs.includes(timezoneName)) {
    //     throw new ApiError({ message: 'timezoneName must in allowTimezoneNameStrs!' });
    //   }
    //   return timezoneName;
    // }
    // 获取某个人某时刻某个项目的devEq
    static async getDevEqByTeamUserIdByTime(idTuples) {
        if (idTuples.length == 0) {
            return {};
        }
        const memCache = cacheUtils_1.newMemCache();
        let result = await Promise.all(idTuples.map(async ({ teamUserId, primaryEmail, date, projectId, latestReportId }) => {
            var _a, _b;
            // latestReportId = latestReportId ?? (await Project.findOneOrFail(projectId)).latestReportId;
            // primaryEmail = primaryEmail ?? await getServices().teamService.getPrimaryEmailByTeamUser(getManager(), { id: teamUserId });
            const distribution = await cacheUtils_1.getOrRecompute(memCache, `${latestReportId}:${date.getTime()}`, async () => await services_1.getServices().reportService.getDevEqDistributionAtTime(latestReportId, date));
            return { teamUserId, date, projectId, value: (_b = (_a = distribution[primaryEmail]) === null || _a === void 0 ? void 0 : _a.dev_equivalent) !== null && _b !== void 0 ? _b : 0 };
        }));
        let resultObject = {};
        for (let item of result) {
            resultObject[item.teamUserId + item.projectId + item.date.toISOString()] = item.value;
        }
        return resultObject;
    }
    // 把查询出来的数据按照devEq加权平均
    static mergeMetricByDevEq(metricGroupTable, devEqData) {
        for (let groupKey in metricGroupTable) {
            for (let dateData of metricGroupTable[groupKey]) {
                let devEqSum = 0;
                let avgSum = 0.0;
                let itemList = dateData.value;
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
    static mergeMetricByFraction(metricGroupTable, ifZeroDenominatorNan = false) {
        for (let teamUserId in metricGroupTable) {
            for (let dateData of metricGroupTable[teamUserId]) {
                let denominator = 0.0;
                let numerator = 0.0;
                let itemList = dateData.value;
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
    static buildGroupTableByRows(items, ...mapKeyObjects) {
        let tmpGroup = {};
        let mapKeyObject = mapKeyObjects.shift();
        if (typeof mapKeyObject !== 'object') {
            mapKeyObject = { mapKey: mapKeyObject };
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
            tmpGroup[subKey].push(item);
        }
        let result = {};
        for (let formatedSubKey in tmpGroup) {
            // 使用formatFunc格式化
            let newItems = mapKeyObject.formatFunc ? mapKeyObject.formatFunc(tmpGroup[formatedSubKey]) : tmpGroup[formatedSubKey];
            // 递归格式化子级
            result[formatedSubKey] = mapKeyObjects.length > 0 ? this.buildGroupTableByRows(newItems, ...mapKeyObjects) : newItems;
        }
        return result;
    }
    // 把数据按照所需的时间片段格式化
    static formatByTimePeriod(items, periodOption, timezoneName = 'UTC', startDate, endDate, options = {}) {
        // 把已有的数据放到各自的时间单位中
        let groupedDataMap = {};
        for (let item of items) {
            let startOfitemTimeUnix = moment_timezone_1.default.tz(item.date, timezoneName).startOf(periodOption.unitOfTime).unix();
            if (!groupedDataMap[startOfitemTimeUnix]) {
                groupedDataMap[startOfitemTimeUnix] = [];
            }
            if (item) {
                groupedDataMap[startOfitemTimeUnix].push(item);
            }
        }
        // 从开始到最后，一个个时间片查询并收集数据
        let groupedDataTable = [];
        let currentMoment = moment_timezone_1.default(startDate).tz(timezoneName).startOf(periodOption.unitOfTime);
        let endMoment = moment_timezone_1.default(endDate).tz(timezoneName).endOf(periodOption.unitOfTime);
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
    static makeDataSetsToAccumulateResult(dataSets, accumulateResult) {
        var _a, _b, _c;
        let accumulateResultMap = {};
        accumulateResult.forEach(item => accumulateResultMap[item.project_id || item.group_id || item.primary_email] = item.value);
        for (let item of dataSets) {
            let accumulateBase = accumulateResultMap[((_a = item.group) === null || _a === void 0 ? void 0 : _a.id) || ((_b = item.project) === null || _b === void 0 ? void 0 : _b.id) || ((_c = item.developer) === null || _c === void 0 ? void 0 : _c.primaryEmail)] || 0;
            item.avg = NaN;
            item.standardDeviation = NaN;
            for (let i in item.series) {
                accumulateBase = item.series[i].value = accumulateBase + item.series[i].value;
            }
        }
    }
    // 从数据中计算出标准差
    // https://baike.baidu.com/item/%E6%96%B9%E5%B7%AE/3108412?fr=aladdin
    getStandardDeviation(dataSets, avg) {
        if (dataSets.length < 1) {
            return NaN;
        }
        let squareSum = 0, count = 0;
        dataSets.forEach(v => {
            v.dataSet.forEach(v2 => {
                squareSum += Math.pow((typeof v2 == 'object' ? v2 === null || v2 === void 0 ? void 0 : v2.value : v2) - avg, 2);
                count++;
            });
        });
        // 方差
        let variance = squareSum / count;
        // 标准差
        return Math.sqrt(variance);
    }
    // 获取统计学上下限
    getStatisticsLimit(dataSets, avg) {
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
    static getAvg(data, avgKey) {
        if (data.length < 1) {
            return NaN;
        }
        let s = 0;
        data.forEach(v => s += v[avgKey]);
        return s / data.length;
    }
    // 获取统计学上下限
    static getStatisticsValue(records) {
        if (records.length < 1) {
            return { avg: NaN, minLimit: NaN, maxLimit: NaN, standardDeviation: NaN, };
        }
        let values = new ValueIterator_1.ValueIterator(records, item => {
            return item.series
                .map(v2 => typeof v2 == 'object' ? v2 === null || v2 === void 0 ? void 0 : v2.value : v2)
                .filter(it => it !== 0);
        });
        let avg = statisticsHelper_1.StatisticsHelper.avg(values);
        let standardDeviation = statisticsHelper_1.StatisticsHelper.standardDeviation(values, avg);
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
exports.Statistics = Statistics;
class FilterTimeOption {
    constructor(timezoneName, startDate, endDate) {
        if (!timezoneNames_1.allowTimezoneNameStrs.includes(timezoneName)) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'timezoneName must in allowTimezoneNameStrs!', });
        }
        if (!startDate) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'startDate require!' });
        }
        if (!endDate) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'endDate require!' });
        }
        this.startDateMoment = moment_timezone_1.default.tz(startDate, timezoneName).startOf('day');
        this.endDateMoment = moment_timezone_1.default.tz(endDate, timezoneName).endOf('day');
        this.startDate = this.startDateMoment.toDate();
        this.endDate = this.endDateMoment.toDate();
        if (this.endDateMoment.isBefore(this.startDateMoment)) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'startDate must before endDate' });
        }
    }
}
exports.FilterTimeOption = FilterTimeOption;
class GroupPeriodOption {
    constructor(unitNumber, unitOfTime) {
        let allowUnitNumber = { day: 31, week: 52, month: 12, quarter: 4, year: 1, };
        if (typeof unitNumber !== 'number') {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'unitNumber must be a number' });
        }
        if (!allowUnitNumber[unitOfTime]) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'unitOfTime invalid' });
        }
        if (unitNumber <= 0) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: 'unitNumber must >0' });
        }
        if (unitNumber > allowUnitNumber[unitOfTime]) {
            throw new errors_1.ApiError(errors_2.INVALID_VALUE, { message: `unitOfTime must < ${allowUnitNumber[unitOfTime]} when ${unitOfTime}` });
        }
        this.unitNumber = unitNumber;
        this.unitOfTime = unitOfTime;
    }
}
exports.GroupPeriodOption = GroupPeriodOption;
