/**
 * It is null or undefined that we called nil
 * use "isNone" utils to check validation.
 */
export type None = null | undefined;
/**
 * It is some value
 * use "isSome" utils to check validation.
 */
export type Some<T> = T;
/**
 * It is some or none
 * use "isSome" or "isNone" utils to check validation considering what you want.
 */
export type Maybe<T> = Some<T> | None;
/**
 * It is some or null
 * use "isSome" or "isNull" utils to check validation considering what you want.
 */
export type Nullable<T> = Some<T> | null;
/**
 * It is some or undefined
 * use "isSome" or "isUndefined" utils to check validation considering what you want.
 */
export type Optional<T> = Some<T> | undefined;
export type GetOrElse = <R>(fallback: R) => <T>(value: Maybe<T>) => T | R;
