export type Some<T> = T;
export type None = null | undefined;
export type Option<T> = Some<T> | None;
