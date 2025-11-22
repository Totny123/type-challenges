type MyExtract<RAW, NEED> = NEED extends RAW ? NEED : never;

type A = MyExtract<1 | 2 | 3, 2 | 4>;

type B = Extract<1 | 2 | 3, 2 | 4>;
