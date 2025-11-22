// K提前约束
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Person = { name: string; age: number; school: string };

type A = MyPick<Person, 'name' | 'age'>;
type B = Pick<Person, 'name' | 'age'>;
