import { Moment } from 'moment';
declare type GroupTable<T> = {
    [any: string]: Partial<T>[] | GroupTable<T>;
};
export declare class Statistics {
    static getFormatLastPeriod(): Promise<void>;
    static getDevEqByTeamUserIdByTime(idTuples: {
        teamUserId: string;
        primaryEmail: string;
        date: Date;
        projectId: string;
        latestReportId: string;
    }[]): Promise<{
        [idTupleJoin: string]: number;
    }>;
    static mergeMetricByDevEq<T extends {
        team_user_id: any;
        report_id: any;
        project_id: any;
        date: any;
        value: any;
    }>(metricGroupTable: {
        [teamUserId: string]: T[];
    }, devEqData: {
        [idTupleJoin: string]: number;
    }): {
        [teamUserId: string]: T[];
    };
    static mergeMetricByFraction<T extends {
        team_user_id: any;
        report_id: any;
        project_id: any;
        date: any;
        value: any;
    }>(metricGroupTable: {
        [teamUserId: string]: T[];
    }, ifZeroDenominatorNan?: boolean): {
        [teamUserId: string]: T[];
    };
    static buildGroupTableByRows<T, K extends keyof T>(items: T[], ...mapKeyObjects: (K | {
        mapKey: K;
        allSubKeys?: any[];
        keepMapKey?: boolean;
        subKeyFormat?: (items: any) => string;
        formatFunc?: (items: Partial<T>[]) => Partial<T>[];
    })[]): GroupTable<T>;
    static formatByTimePeriod<T extends {
        date?: string;
        value?: number;
    }>(items: T[], periodOption: GroupPeriodOption, timezoneName: string, startDate: Date, endDate: Date, options?: {
        samePeriodMergeType?: 'sum' | 'drop' | 'replace' | 'array';
    }): {
        date: string;
        value: number;
    }[] | T[];
    static makeDataSetsToAccumulateResult(dataSets: {
        project?: any;
        group?: any;
        developer?: any;
        series: {
            date?: any;
            value: any;
        }[];
        avg?: number;
        standardDeviation?: any;
    }[], accumulateResult: {
        project_id?: any;
        group_id?: any;
        primary_email?: any;
        value: any;
    }[]): void;
    getStandardDeviation(dataSets: {
        dataSet: Array<number | {
            value: number;
        }>;
    }[], avg: number): number;
    getStatisticsLimit(dataSets: {
        dataSet: Array<number | {
            value: number;
        }>;
    }[], avg: number): [number, number];
    static getAvg(data: object[], avgKey: string): number;
    static getStatisticsValue(records: {
        series: Array<{
            value: number;
        }>;
    }[]): {
        avg: number;
        minLimit: number;
        maxLimit: number;
        standardDeviation: number;
    };
}
export declare class FilterTimeOption {
    name: 'filter-time';
    startDate: Date;
    startDateMoment: Moment;
    endDate: Date;
    endDateMoment: Moment;
    constructor(timezoneName: any, startDate: Date | string, endDate: Date | string);
}
export declare class GroupPeriodOption {
    name: 'group-period';
    unitNumber: number;
    unitOfTime: 'day' | 'week' | 'month' | 'quarter' | 'year';
    constructor(unitNumber: number, unitOfTime: 'day' | 'week' | 'month' | 'quarter' | 'year');
}
export {};
