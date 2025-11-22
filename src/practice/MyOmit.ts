type MyOmit<A, B extends keyof any> = {
  [P in Exclude<keyof A, B>]: A[P];
};

type Person = { name: string; age: number };
type A = MyOmit<Person, 'age'>;
type B = Omit<Person, 'age'>;
