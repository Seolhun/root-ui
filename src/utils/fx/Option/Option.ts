import { Maybe, Some, None, GetOrElse } from './Option.types';

/**
 * Options
 */
export const none = (): None => null;
export const some = <T>(value: T): Some<T> => value;
export const isNil = <T>(value: Maybe<T>): value is Some<T> => value == null;
export const isSome = <T>(value: Maybe<T>): value is Some<T> => !isNil(value);
export const isNone = <T>(value: Maybe<T>): value is None => isNil(value);

/**
 * GetOrElse
 * @param fallback
 */
export const getOrElse: GetOrElse = (fallback) => (value) => isSome(value) ? value : fallback;
export const isStrictEqual = <T>(v1: Maybe<T>, v2: Maybe<T>): boolean => isSome(v1) && isSome(v2) && v1 === v2;
