import * as React from 'react';
declare function useInitialFocus({ ownerDocument, container, initialFocus, }: {
    ownerDocument: Document | null;
    container: React.MutableRefObject<HTMLElement | null>;
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
}, enabled: boolean): React.MutableRefObject<HTMLElement | null>;
export { useInitialFocus };
export default useInitialFocus;
