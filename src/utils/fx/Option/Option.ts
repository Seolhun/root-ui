import { GetOrElse, None, Optional, Some } from './Option.types';

/**
 * Options
 */
export const none = (): None => null;
export const some = <T>(value: T): Some<T> => value;
export const isNil = <T>(value: Optional<T>): value is Some<T> => value == null;
export const isSome = <T>(value: Optional<T>): value is Some<T> => !isNil(value);
export const isNone = <T>(value: Optional<T>): value is None => isNil(value);

/**
 * GetOrElse
 * @param fallback
 */
export const getOrElse: GetOrElse = (fallback) => (value) => isSome(value) ? value : fallback;
export const isStrictEqual = <T>(v1: Optional<T>, v2: Optional<T>): boolean => isSome(v1) && isSome(v2) && v1 === v2;
