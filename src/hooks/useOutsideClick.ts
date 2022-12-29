import * as React from 'react';

import { isFunction } from '../utils';
import { FocusableMode, isFocusableElement } from '../tools/focus-trap/FocusManagements';

import { useDocumentEvent } from './useDocumentEvent';

type Container = React.MutableRefObject<HTMLElement | null> | HTMLElement | null;
type ContainerCollection = Container[] | Set<Container>;
type ContainerInput = Container | ContainerCollection;

function useOutsideClick(
  containers: ContainerInput | (() => ContainerInput),
  callback: (event: MouseEvent | PointerEvent | FocusEvent, target: HTMLElement) => void,
  enabled = true,
) {
  // TODO: remove this once the React bug has been fixed: https://github.com/facebook/react/issues/24657
  const enabledRef = React.useRef(false);
  const initialClickTarget = React.useRef<EventTarget | null>(null);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      enabledRef.current = enabled;
    });
  }, [enabled]);

  const handleOutsideClick = React.useCallback(
    <E extends MouseEvent | PointerEvent | FocusEvent>(event: E, resolveTarget: (event: E) => HTMLElement | null) => {
      if (!enabledRef.current) {
        return;
      }

      // Check whether the event got prevented already. This can happen if you use the
      // useOutsideClick hook in both a Modal and a Menu and the inner Menu "cancels" the default
      // behavior so that only the Menu closes and not the Modal (yet)
      if (event.defaultPrevented) {
        return;
      }

      const typedContainers = (function resolve(containers): ContainerCollection {
        if (isFunction(containers)) {
          return resolve(containers());
        }
        if (Array.isArray(containers)) {
          return containers;
        }
        if (containers instanceof Set) {
          return containers;
        }
        return [containers];
      })(containers);

      const target = resolveTarget(event);
      if (target === null) {
        return;
      }

      // Ignore if the target doesn't exist in the DOM anymore
      const isContainsTargetInOwnerDocument = target.ownerDocument.documentElement.contains(target);
      if (!isContainsTargetInOwnerDocument) {
        return;
      }

      // Ignore if the target exists in one of the containers
      for (const container of typedContainers) {
        if (container === null) {
          continue;
        }
        const isHtmlContainer = container instanceof HTMLElement;
        const containerDomNode = isHtmlContainer ? container : container.current;
        if (containerDomNode?.contains(target)) {
          return;
        }
      }

      // This allows us to check whether the event was defaultPrevented when you are nesting this
      // inside a `<Modal />` for example.
      // This check allows us to know whether or not we clicked on a "focusable" element like a
      // button or an input. This is a backwards compatibility check so that you can open a <Menu />
      // and click on another <Menu /> which should close Menu A and open Menu B.We might
      // revisit that so that you will require 2 clicks instead.
      // This could be improved, but the `Comboboxes.Button` adds tabIndex={-1} to make it
      // unfocusable via the keyboard so that tabbing to the next item from the input doesn't
      // first go to the button.
      if (!isFocusableElement(target, FocusableMode.Loose) && target.tabIndex !== -1) {
        event.preventDefault();
      }
      return callback(event, target);
    },
    [callback, containers],
  );

  useDocumentEvent(
    'mousedown',
    (event) => {
      if (enabledRef.current) {
        initialClickTarget.current = event.target;
      }
    },
    true,
  );

  useDocumentEvent(
    'click',
    (event) => {
      if (!initialClickTarget.current) {
        return;
      }
      handleOutsideClick(event, () => {
        return initialClickTarget.current as HTMLElement;
      });
      initialClickTarget.current = null;
    },
    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `ModalPanel` if the `Menu`
    // is open, and you click outside of it in the `ModalPanel` the `Menu` should close. However,
    // the `ModalPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true,
  );

  // When content inside an iframe is clicked `window` will receive a blur event
  // This can happen when an iframe _inside_ a window is clicked
  // Or, if headless UI is *in* the iframe, when a content in a window containing that iframe is clicked
  // In this case we care only about the first case so we check to see if the active element is the iframe
  // If so this was because of a click, focus, or other interaction with the child iframe
  // and we can consider it an "outside click"
  useDocumentEvent(
    'blur',
    (event) => {
      return handleOutsideClick(event, () => {
        return window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null;
      });
    },
    true,
  );
}

export { useOutsideClick };
export default useOutsideClick;
