export const newMemCache = () => {
  return new Map();
};

export const getOrRecompute = async (cache: Map<string, any>, key: string, compute: () => any) => {
  if (cache.has(key)) {
    return cache.get(key);
  } else {
    const promise = compute();
    cache.set(key, promise);
    return promise;
  }
};
