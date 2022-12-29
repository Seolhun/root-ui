import * as React from 'react';

import { useLatestValue } from './useLatestValue';

export function useEventListener<K extends keyof WindowEventMap>(
  element: HTMLElement | Document | Window | EventTarget | null | undefined,
  type: K,
  listener: (event: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
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
