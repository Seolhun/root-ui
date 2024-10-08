import * as React from 'react';

export function useDocumentEvent<K extends keyof DocumentEventMap>(
  type: K,
  callback: (event: DocumentEventMap[K]) => void,
  options?: AddEventListenerOptions | boolean,
) {
  React.useEffect(function initEvent() {
    document.addEventListener<K>(type, callback, options);
    return function cleanup() {
      document.removeEventListener<K>(type, callback, options);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
