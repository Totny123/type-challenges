type IsTuple<T extends { length: number }> = [T] extends [never]
  ? false
  : T extends unknown[] | readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false;

type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false
type case4 = IsTuple<never>; // false
