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
 * It is some or null
 * use "isSome" or "isNull" utils to check validation considering what you want.
 */
export type Nullable<T> = null | Some<T>;

/**
 * It is some or undefined
 * use "isSome" or "isUndefined" utils to check validation considering what you want.
 */
export type Optional<T> = None | Some<T>;

export type GetOrElse = <R>(fallback: R) => <T>(value: Optional<T>) => R | T;
