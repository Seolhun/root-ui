import React from 'react';
import { useLatestValue } from './useLatestValue';

type EventCallback = <Arg = any, Res = any>(...args: Arg[]) => Res;

export function useEvent<F extends EventCallback, P extends Parameters<F> = Parameters<F>, R = ReturnType<F>>(
  cb: (...args: P) => R,
) {
  const cache = useLatestValue(cb);
  return React.useCallback((...args: P) => cache.current(...args), [cache]);
}
