import * as React from 'react';

import { useLatestValue } from './useLatestValue';

export function useEventListener<K extends keyof WindowEventMap>(
  element: Document | EventTarget | HTMLElement | null | undefined | Window,
  type: K,
  listener: (event: WindowEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean,
) {
  const listenerRef = useLatestValue(listener);

  React.useEffect(() => {
    function eventHandler(event: WindowEventMap[K]) {
      listenerRef.current(event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    element = element ?? window;
    element.addEventListener(type, eventHandler as any, options);
    return () => {
      element?.removeEventListener(type, eventHandler as any, options);
    };
  }, [element, type, options]);
}
