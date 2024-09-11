declare type Maybe<T> = Optional<Nullable<T>>;
declare type Nullable<T> = T | null;
declare type OmitBy<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type Optional<T> = T | undefined;
declare type PartialBy<T, K extends keyof T> = Partial<Pick<T, K>>;
declare type RequiredBy<T, K extends keyof T> = Required<Pick<T, K>>;
declare type ValueOf<T> = T[keyof T];
