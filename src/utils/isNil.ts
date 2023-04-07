import { None, Option } from './Utils.types';

export const isNil = <Value>(value: Option<Value>): value is None => {
  return value == null;
};
