export function match<Key extends number | string, ReturnValue = unknown, Argument = any>(
  key: Key,
  lookup: Record<Key, ((...args: Argument[]) => ReturnValue) | ReturnValue>,
  ...args: Argument[]
): ReturnValue {
  if (key in lookup) {
    const returnValue = lookup[key];
    return typeof returnValue === 'function' ? returnValue(...args) : returnValue;
  }

  const errorKeys = Object.keys(lookup).map((key) => `"${key}"`);
  const joinedErrorKeys = errorKeys.join(', ');
  const errorMessage = `Tried to handle "${key}" but there is no handler defined. Only defined handlers are: ${joinedErrorKeys}.`;
  const error = new Error(errorMessage);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, match);
  }
  throw error;
}
