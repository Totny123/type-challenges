type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type Person = { name: string; age: number };

type A = MyPartial<Person>;
type B = Partial<Person>;
