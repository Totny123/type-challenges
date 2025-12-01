type Join<
  T extends Array<string | number>,
  U extends string | number = ','
> = T['length'] extends 1
  ? T[0]
  : T extends [
      infer First extends string | number,
      ...infer Rest extends Array<string | number>
    ]
  ? `${First}${U}${Join<Rest, U>}`
  : '';

type Res = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
type Res1 = Join<['Hello', 'World'], ' '>; // expected to be 'Hello World'
type Res2 = Join<['2', '2', '2'], 1>; // expected to be '21212'
type Res3 = Join<['o'], 'u'>; // expected to be 'o'
