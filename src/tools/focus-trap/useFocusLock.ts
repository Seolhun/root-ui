import { useEventListener, useIsMounted } from '../../hooks';

import { focusElement } from './FocusManagements';

export interface UseFocusLockProps {
  container: React.MutableRefObject<HTMLElement | null>;
  containers?: React.MutableRefObject<Set<React.MutableRefObject<HTMLElement | null>>>;
  ownerDocument: Document | null;
  previousActiveElement: React.MutableRefObject<HTMLElement | null>;
}

function contains(containers: Set<React.MutableRefObject<HTMLElement | null>>, element: HTMLElement) {
  for (const container of containers) {
    if (container.current?.contains(element)) return true;
  }
  return false;
}

export function useFocusLock(
  { container, containers, ownerDocument, previousActiveElement }: UseFocusLockProps,
  enabled: boolean,
) {
  const mounted = useIsMounted();

  // Prevent programmatically escaping the container
  useEventListener(
    ownerDocument?.defaultView,
    'focus',
    (event) => {
      if (!enabled) {
        return;
      }
      if (!mounted.current) {
        return;
      }

      const allContainerSet = new Set(containers?.current);
      allContainerSet.add(container);
      const previous = previousActiveElement.current;
      if (!previous) {
        return;
      }

      const toElement = event.target as HTMLElement | null;
      if (toElement && toElement instanceof HTMLElement) {
        if (!contains(allContainerSet, toElement)) {
          event.preventDefault();
          event.stopPropagation();
          focusElement(previous);
        } else {
          previousActiveElement.current = toElement;
          focusElement(toElement);
        }
      } else {
        focusElement(previousActiveElement.current);
      }
    },
    true,
  );
}
