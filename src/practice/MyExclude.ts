// 分布式条件类型会分开计算类型
type MyExclude<RAW, DEL> = RAW extends DEL ? never : RAW;

type A = MyExclude<1 | 2 | 3, 1 | 2>;
type B = Exclude<1 | 2 | 3, 1 | 2>;
