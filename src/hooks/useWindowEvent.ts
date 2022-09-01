import React from 'react';

import { useLatestValue } from './useLatestValue';

function useWindowEvent<EventType extends keyof WindowEventMap>(
  type: EventType,
  listener: (ev: WindowEventMap[EventType]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  const listenerRef = useLatestValue(listener);

  React.useEffect(() => {
    function handler(event: WindowEventMap[EventType]) {
      listenerRef.current(event);
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, options]);
}

export { useWindowEvent };
export default useWindowEvent;
