import { None, Option } from './Utils.types';
declare const isNil: <Value>(value: Option<Value>) => value is None;
export { isNil };
export default isNil;
