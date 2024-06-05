/**
 * Represents a reducer function that takes a state type and eitther an action or an union of actions and returns a state type also adds a key property with string type to the function.
 * @param S - reducer state type
 * @param A - action type or action union type
 * @returns The new state after the action is applied.
 */
declare interface TReducer<I, S, A> {
  key: string
  initialState: I,
  (state: S, action: A): S
}

/**
 * Represents an action type with a type property and a payload property.
 * @param T - action type
 * @param P - action payload type
 */
declare type TAction<T, P> = { type: T, payload: P }

/**
 * Extracts all action types from an array of reducer functions that extend TReducer.
 * @param T - array of reducer functions that extend TReducer
 * @returns An array of extracted action types
 */
declare type ExtractAllReducerActions<T extends readonly any[]> = {
  [K in keyof T]: T[K] extends TReducer<any, any, infer C> ? C : never;
}[number]