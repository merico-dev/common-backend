/**
 * 将 任意数组(一维、二维) 转为可迭代的 number[]
 */
export declare class ValueIterator<T> {
    items: T[];
    itemFormat: (T: any) => (number | number[]);
    constructor(items: T[], itemFormat: (T: any) => (number | number[]));
    [Symbol.iterator](): Iterator<number>;
}
