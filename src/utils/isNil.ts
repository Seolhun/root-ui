import { None, Option } from './Utils.types';

const isNil = <Value>(value: Option<Value>): value is None => {
  return value == null;
};

export { isNil };
export default isNil;
