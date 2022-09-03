export const match = <Key extends string, R>(lookup: Record<Key, () => R>, key: Key) => {
  const callback = lookup[key];
  return callback();
};
