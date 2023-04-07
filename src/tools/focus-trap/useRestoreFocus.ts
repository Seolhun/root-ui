import * as React from 'react';

import { useEventListener, useWatch } from '~/hooks';
import { toMicrotask } from '~/utils';

import { focusElement } from './FocusManagements';

export interface UseRestoreFocusProps {
  ownerDocument: Document | null;
}

export function useRestoreFocus({ ownerDocument }: UseRestoreFocusProps, enabled: boolean) {
  const restoreElement = React.useRef<HTMLElement | null>(null);

  // Capture the currently focused element, before we try to move the focus inside the FocusTrap.
  useEventListener(
    ownerDocument?.defaultView,
    'focusout',
    (event) => {
      if (!enabled) {
        return;
      }
      if (restoreElement.current) {
        return;
      }
      restoreElement.current = event.target as HTMLElement;
    },
    true,
  );

  // Restore the focus to the previous element when `enabled` becomes false again
  useWatch(() => {
    if (enabled) {
      return;
    }
    if (ownerDocument?.activeElement === ownerDocument?.body) {
      focusElement(restoreElement.current);
    }
    restoreElement.current = null;
  }, [enabled]);

  // Restore the focus to the previous element when the component is unmounted
  const trulyUnmounted = React.useRef(false);
  React.useEffect(() => {
    trulyUnmounted.current = false;
    return () => {
      trulyUnmounted.current = true;
      toMicrotask(() => {
        if (!trulyUnmounted.current) {
          return;
        }
        focusElement(restoreElement.current);
        restoreElement.current = null;
      });
    };
  }, []);
}
