"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueIterator = void 0;
/**
 * 将 任意数组(一维、二维) 转为可迭代的 number[]
 */
class ValueIterator {
    constructor(items, itemFormat) {
        this.items = items;
        this.itemFormat = itemFormat;
    }
    *[Symbol.iterator]() {
        for (let item of this.items) {
            let formatValue = this.itemFormat(item);
            if (typeof formatValue == 'number') {
                yield formatValue;
            }
            else {
                for (let subValue of formatValue) {
                    yield subValue;
                }
            }
        }
    }
}
exports.ValueIterator = ValueIterator;
