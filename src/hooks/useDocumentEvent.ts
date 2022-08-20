import React from 'react';

function useDocumentEvent<K extends keyof DocumentEventMap>(
  type: K,
  callback: (event: DocumentEventMap[K]) => void,
  capturing = false,
) {
  React.useEffect(function initEvent() {
    document.addEventListener<K>(type, callback, capturing);
    return function cleanup() {
      document.removeEventListener<K>(type, callback, capturing);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { useDocumentEvent };
export default useDocumentEvent;
