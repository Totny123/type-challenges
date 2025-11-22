type MyRecord<K extends number | string | symbol, V> = {
  [P in K]: V;
};

type A = MyRecord<string, boolean>;
type B = Record<string, boolean>;
