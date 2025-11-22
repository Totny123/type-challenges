type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type Person = { name?: string; age?: number };

type A = MyRequired<Person>;
type B = Required<Person>;
