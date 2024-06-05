/**
 * A utility type that creates a mapped type from a given object type.
 *
 * @template T The type of the input object.
 * @returns A mapped type where the keys are the keys of the input object and the values are the corresponding values of the input object.
 * @example
 * ```typescript
 * type MyType = {
 *   a: number;
 *   b: string;
 *   c: boolean;
 * }
 *
 * type MyMappedType = Map<MyType>;
 * // MyMappedType is equivalent to { a: number; b: string; c: boolean; }
 * ```
 */
export type Map<T> = {[Prop in keyof T]: T[Prop]}

