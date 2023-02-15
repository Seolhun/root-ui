export type Some<T> = T;
export type None = null | undefined;
export type Option<T> = Some<T> | None;

export const some = <T>(value: T): Some<T> => value;
export const none = (): None => null;

export const isNil = <T>(value: Option<T>): value is Some<T> => value == null;
export const isSome = <T>(value: Option<T>): value is Some<T> => !isNil(value);
export const isNone = <T>(value: Option<T>): value is None => isNil(value);

type GetOrElse = <R>(fallback: R) => <T>(value: Option<T>) => T | R;

export const getOrElse: GetOrElse = (fallback) => (value) => isSome(value) ? value : fallback;

export const isStrictEqual = <T>(v1: Option<T>, v2: Option<T>): boolean => isSome(v1) && isSome(v2) && v1 === v2;
