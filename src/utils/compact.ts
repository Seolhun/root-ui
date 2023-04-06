import { isUndefined } from './isUndefined';

export function compact<T extends Record<any, any>>(object: T, predicate = isUndefined) {
  const clone = Object.assign({}, object);
  for (const key in clone) {
    if (predicate(clone[key])) delete clone[key];
  }
  return clone;
}
