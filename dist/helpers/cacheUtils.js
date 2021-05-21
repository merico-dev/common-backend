"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrRecompute = exports.newMemCache = void 0;
exports.newMemCache = () => {
    return new Map();
};
exports.getOrRecompute = async (cache, key, compute) => {
    if (cache.has(key)) {
        return cache.get(key);
    }
    else {
        const promise = compute();
        cache.set(key, promise);
        return promise;
    }
};
