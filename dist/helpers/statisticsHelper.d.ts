import { ValueIterator } from "./ValueIterator";
export declare class StatisticsHelper {
    static avg(values: number[] | ValueIterator<any>, weights?: number[]): number;
    static max(values: number[] | ValueIterator<any>): number;
    static min(values: number[] | ValueIterator<any>): number;
    static standardDeviation(values: number[] | ValueIterator<any>, avg: number): number;
    static quantile(values: number[], q: number): number;
    static maxUnder(values: number[], high: number): number;
    static minAbove(values: number[], low: number): number;
}
