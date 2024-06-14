import * as React from 'react';

import { useEvent } from './useEvent';

const Optional = Symbol();

export function optionalRef<T>(cb: (ref: T) => void, isOptional = true) {
  return Object.assign(cb, { [Optional]: isOptional });
}

export function useSyncRefs<RefType>(
  ...refs: (((instance: RefType) => void) | null | React.MutableRefObject<null | RefType>)[]
) {
  const cache = React.useRef(refs);

  React.useEffect(() => {
    cache.current = refs;
  }, [refs]);

  const syncRefs = useEvent((value: RefType) => {
    for (const ref of cache.current) {
      if (ref == null) {
        continue;
      }
      if (typeof ref === 'function') {
        ref(value);
      } else {
        ref.current = value;
      }
    }
  });

  return refs.every((ref) => ref == null || ref?.[Optional]) ? undefined : syncRefs;
}
