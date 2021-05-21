export declare const newMemCache: () => Map<any, any>;
export declare const getOrRecompute: (cache: Map<string, any>, key: string, compute: () => any) => Promise<any>;
