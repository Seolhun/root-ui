export type Nullable<T> = null | T;
export type Optional<T> = T | undefined;
export type Maybe<T> = Optional<Nullable<T>>;

export type OmitBy<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type ValueOf<T> = T[keyof T];

export type Expand<T> = T extends infer O ? Record<keyof O, O[keyof O]> : never;
export type UnknownObject = Record<number | string | symbol, unknown>;
