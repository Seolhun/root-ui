import * as React from 'react';

import { Focus, focusElement, focusIn, FocusResult } from './FocusManagements';

import { useIsMounted, useWatch } from '../../hooks';
import { toMicrotask } from '../../utils';

export function useInitialFocus(
  {
    ownerDocument,
    container,
    initialFocus,
  }: {
    ownerDocument: Document | null;
    container: React.MutableRefObject<HTMLElement | null>;
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
  },
  enabled: boolean,
) {
  const isMounted = useIsMounted();
  const previousActiveElement = React.useRef<HTMLElement | null>(null);

  // Handle initial focus
  useWatch(() => {
    if (!enabled) return;
    const containerElement = container.current;
    if (!containerElement) return;

    // Delaying the focus to the next microtask ensures that a few conditions are true:
    // - The container is rendered
    // - Transitions could be started
    // If we don't do this, then focusing an element will immediately cancel any transitions. This
    // is not ideal because transitions will look broken.
    // There is an additional issue with doing this immediately. The FocusTrap is used inside a
    // Dialog, the Dialog is rendered inside of a Portal and the Portal is rendered at the end of
    // the `document.body`. This means that the moment we call focus, the browser immediately
    // tries to focus the element, which will still be at the bodem resulting in the page to
    // scroll down. Delaying this will prevent the page to scroll down entirely.
    toMicrotask(() => {
      if (!isMounted.current) {
        return;
      }

      const activeElement = ownerDocument?.activeElement as HTMLElement;
      if (initialFocus?.current) {
        if (initialFocus?.current === activeElement) {
          previousActiveElement.current = activeElement;
          return; // Initial focus ref is already the active element
        }
      } else if (containerElement!.contains(activeElement)) {
        previousActiveElement.current = activeElement;
        return; // Already focused within Dialog
      }

      // Try to focus the initialFocus ref
      if (initialFocus?.current) {
        focusElement(initialFocus.current);
      } else {
        if (focusIn(containerElement!, Focus.First) === FocusResult.Error) {
          console.warn('There are no focusable elements inside the <FocusTrap />');
        }
      }
      previousActiveElement.current = ownerDocument?.activeElement as HTMLElement;
    });
  }, [enabled]);

  return previousActiveElement;
}
