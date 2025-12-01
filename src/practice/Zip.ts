type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer TF,
  ...infer TREST
]
  ? U extends [infer UF, ...infer UREST]
    ? [[TF, UF], ...Zip<TREST, UREST>]
    : []
  : [];

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
