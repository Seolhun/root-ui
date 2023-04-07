import { useRef } from 'react';

import { useIsoMorphicEffect } from './useIsoMorphicEffect';

export function useIsMounted() {
  const mounted = useRef(false);

  useIsoMorphicEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}
