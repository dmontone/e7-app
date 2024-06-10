declare interface TReducer<I, S, A> {
  key: string
  initialState: I,
  (state: S, action: A): S
}

declare type TAction<T, P> = { type: T, payload: P }

declare type ExtractAllReducerActions<T extends readonly any[]> = {
  [K in keyof T]: T[K] extends TReducer<any, any, infer C> ? C : never;
}[number]

declare type TState<D, P = {}> = {
  isFetched: boolean
  isFetching: boolean
  params: P
  error: any
  data: D
}