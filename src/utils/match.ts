export function match<TValue extends string | number = string, TReturnValue = unknown, TArgument = any>(
  value: TValue,
  lookup: Record<TValue, TReturnValue | ((...args: TArgument[]) => TReturnValue)>,
  ...args: TArgument[]
): TReturnValue {
  if (value in lookup) {
    const returnValue = lookup[value];
    return typeof returnValue === 'function' ? returnValue(...args) : returnValue;
  }

  const errorKeys = Object.keys(lookup)
    .map((key) => `"${key}"`)
    .join(', ');
  const error = new Error(
    `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${errorKeys}.`,
  );

  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, match);
  }
  throw error;
}
