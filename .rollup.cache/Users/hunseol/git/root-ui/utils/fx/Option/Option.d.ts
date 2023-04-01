import { Maybe, Some, None, GetOrElse } from './Option.types';
/**
 * Options
 */
export declare const none: () => None;
export declare const some: <T>(value: T) => T;
export declare const isNil: <T>(value: Maybe<T>) => value is T;
export declare const isSome: <T>(value: Maybe<T>) => value is T;
export declare const isNone: <T>(value: Maybe<T>) => value is None;
/**
 * GetOrElse
 * @param fallback
 */
export declare const getOrElse: GetOrElse;
export declare const isStrictEqual: <T>(v1: Maybe<T>, v2: Maybe<T>) => boolean;
