type ExampleType = Promise<string>;

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : never;

type Result = MyAwaited<Promise<ExampleType>>; // string
