import React from 'react';

import { useLatestValue } from './useLatestValue';

export function useEventListener<K extends keyof WindowEventMap>(
  element: HTMLElement | Document | Window | EventTarget | null | undefined,
  type: K,
  listener: (event: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  const listenerRef = useLatestValue(listener);

  React.useEffect(() => {
    function handler(event: WindowEventMap[K]) {
      listenerRef.current(event);
    }

    element = element ?? window;
    element.addEventListener(type, handler as any, options);
    return () => element?.removeEventListener(type, handler as any, options);
  }, [element, type, options]);
}
