import { useRef } from 'react';

import { useIsoMorphicEffect } from './useIsoMorphicEffect';

function useIsMounted() {
  const mounted = useRef(false);

  useIsoMorphicEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

export { useIsMounted };
export default useIsMounted;
