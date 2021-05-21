"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsHelper = void 0;
const quickselect_1 = __importDefault(require("quickselect"));
class StatisticsHelper {
    // 计算平均值
    static avg(values, weights = []) {
        let sum = 0, count = 0;
        for (let value of values) {
            sum += value * (weights[count] || 1);
            count++;
        }
        return sum != 0 ? sum / count : 0;
    }
    // 计算最大值
    static max(values) {
        let max = -Infinity, count = 0;
        for (let value of values) {
            if (value > max) {
                max = value;
                count++;
            }
        }
        return count > 0 ? max : NaN;
    }
    // 计算最小值
    static min(values) {
        let min = Infinity, count = 0;
        for (let value of values) {
            if (value < min) {
                min = value;
                count++;
            }
        }
        return count > 0 ? min : NaN;
    }
    // 从数据中计算出标准差
    // https://baike.baidu.com/item/%E6%96%B9%E5%B7%AE/3108412?fr=aladdin
    static standardDeviation(values, avg) {
        let squareSum = 0, count = 0;
        for (let value of values) {
            squareSum += Math.pow(value - avg, 2);
            count++;
        }
        // 方差
        let variance = squareSum != 0 ? squareSum / count : 0;
        // 标准差
        return Math.sqrt(variance);
    }
    // 从values中找到q分位数，（0.5表示中位数）
    // 注意：values数组会被修改！
    static quantile(values, q) {
        if (values.length < 3) {
            return NaN;
        }
        let floatingIndex = (values.length + 1) * q - 1;
        let floorIndex = Math.round(floatingIndex - 0.5);
        let ceilIndex = Math.round(floatingIndex + 0.5);
        quickselect_1.default(values, floorIndex);
        let floorValue = values[floorIndex];
        quickselect_1.default(values, ceilIndex);
        let ceilValue = values[ceilIndex];
        let floorWeight = 1 - (floatingIndex - floorIndex);
        let ceilWeight = 1 - (ceilIndex - floatingIndex);
        return (floorValue * floorWeight + ceilValue * ceilWeight);
    }
    // 获取数据中，小于high的数中最大的
    static maxUnder(values, high) {
        if (values.length <= 0)
            return NaN;
        let result = -Infinity;
        for (let i = 0; i < values.length; i++) {
            const v = values[i];
            if (v === high) {
                return high;
            }
            if (v < high) {
                result = Math.max(result, v);
            }
        }
        return result;
    }
    // 获取数据中，大于low的数中最小的
    static minAbove(values, low) {
        if (values.length <= 0)
            return NaN;
        let result = Infinity;
        for (let i = 0; i < values.length; i++) {
            const v = values[i];
            if (v === low) {
                return low;
            }
            if (v > low) {
                result = Math.min(result, v);
            }
        }
        return result;
    }
}
exports.StatisticsHelper = StatisticsHelper;
