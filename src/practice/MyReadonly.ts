type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// test
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;
type MyReadonlyPerson = MyReadonly<Person>;
