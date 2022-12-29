import * as React from 'react';

import { getOwnerDocumentBy } from '../utils';

export interface UseLockScrollProps<E extends HTMLElement = HTMLElement> {
  isVisible: boolean;
  hasParent: boolean;
  element: React.MutableRefObject<E | null>;
}

function useLockScroll<E extends HTMLElement = HTMLElement>({ isVisible, hasParent, element }: UseLockScrollProps<E>) {
  React.useEffect(() => {
    if (!isVisible) {
      return;
    }
    if (hasParent) {
      return;
    }
    const ownerDocument = getOwnerDocumentBy(element.current);
    if (!ownerDocument) {
      return;
    }

    const ownerWindow = ownerDocument.defaultView ?? window;
    const documentElement = ownerDocument.documentElement;
    const overflow = documentElement.style.overflow;
    const paddingRight = documentElement.style.paddingRight;
    const scrollbarWidthBefore = ownerWindow.innerWidth - documentElement.clientWidth;

    documentElement.style.overflow = 'hidden';
    if (scrollbarWidthBefore > 0) {
      const scrollbarWidthAfter = documentElement.clientWidth - documentElement.offsetWidth;
      const scrollbarWidth = scrollbarWidthBefore - scrollbarWidthAfter;
      documentElement.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      documentElement.style.overflow = overflow;
      documentElement.style.paddingRight = paddingRight;
    };
  }, [isVisible, hasParent, element]);
}

export { useLockScroll };
export default useLockScroll;
