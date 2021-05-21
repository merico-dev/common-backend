/**
 * 将 任意数组(一维、二维) 转为可迭代的 number[]
 */
export class ValueIterator<T> {
  items: T[];
  itemFormat: (T)=>(number | number[]);

  constructor(items: T[], itemFormat: (T)=>(number | number[])) {
    this.items = items;
    this.itemFormat = itemFormat;
  }

  *[Symbol.iterator](): Iterator<number> {
    for (let item of this.items) {
      let formatValue = this.itemFormat(item);
      if (typeof formatValue == 'number') {
        yield formatValue;
      } else {
        for (let subValue of formatValue) {
          yield subValue;
        }
      }
    }
  }

  // // 获取一维数组的长度
  // get length() {
  //   return this.items.length;
  // }
}

