declare type Nullable<T> = T | null;
declare type Optional<T> = T | undefined;
declare type Maybe<T> = Optional<Nullable<T>>;

declare type OmitBy<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type OptionalBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
declare type ValueOf<T> = T[keyof T];
