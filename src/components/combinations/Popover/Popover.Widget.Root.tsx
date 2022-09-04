import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { FocusableMode, isFocusableElement, OpenClosedProvider, OpenClosedState } from '../../../tools';
import {
  useOutsideClick,
  useOwnerDocument,
  useEvent,
  useEventListener,
  useSyncRefs,
  useId,
  optionalRef,
} from '../../../hooks';
import { match } from '../../../utils';
import { forwardRefWithAs, render } from '../../../core';

import {
  PopoverAPIContext,
  PopoverAPIContextValues,
  PopoverContext,
  usePopoverGroupContext,
} from './Popover.Widget.Context';
import { ActionTypes, rootReducer, StateDefinition } from './Popover.Widget.reducer';
import { PopoverRenderPropArg } from './Popover.Widget.types';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface PopoverRootProps {}

const COMPONENT_NAME = 'Popover';
const DEFAULT_TAG: RootUIReactTag = 'div';

export interface PopoverRootRenderPropArg extends PopoverRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'role' | 'aria-modal' | 'aria-labelledby'>;

const _PopoverWidgetRoot = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, PopoverRootRenderPropArg, PropsWeControl> & PopoverRootProps & ElementProps,
  ref: React.Ref<HTMLElement>,
) => {
  const buttonId = `rootui-popover-button-${useId()}`;
  const panelId = `rootui-popover-panel-${useId()}`;
  const internalPopoverRef = React.useRef<HTMLElement | null>(null);
  const popoverRef = useSyncRefs(
    ref,
    optionalRef((ref) => {
      internalPopoverRef.current = ref;
    }),
  );

  const initState = React.useMemo<StateDefinition>(() => {
    return {
      popoverState: OpenClosedState.Closed,
      button: null,
      buttonId,
      panel: null,
      panelId,
      beforePanelSentinel: React.createRef(),
      afterPanelSentinel: React.createRef(),
    };
  }, [buttonId, panelId]);
  const reducerBag = React.useReducer(rootReducer, initState);
  const [{ popoverState, button, panel, beforePanelSentinel, afterPanelSentinel }, dispatch] = reducerBag;

  const ownerDocument = useOwnerDocument(internalPopoverRef.current ?? button);

  React.useEffect(() => dispatch({ type: ActionTypes.SetButtonId, buttonId }), [buttonId, dispatch]);
  React.useEffect(() => dispatch({ type: ActionTypes.SetPanelId, panelId }), [panelId, dispatch]);

  const isPortalled = React.useMemo(() => {
    if (!button) {
      return false;
    }
    if (!panel) {
      return false;
    }

    for (const root of document.querySelectorAll('body > *')) {
      if (Number(root?.contains(button)) ^ Number(root?.contains(panel))) {
        return true;
      }
    }
    return false;
  }, [button, panel]);

  const registerBag = React.useMemo(() => {
    return {
      buttonId,
      panelId,
      close: () => dispatch({ type: ActionTypes.ClosePopover }),
    };
  }, [buttonId, panelId, dispatch]);

  const groupContext = usePopoverGroupContext();
  const registerPopover = groupContext?.registerPopover;

  React.useEffect(() => {
    if (registerPopover) {
      registerPopover(registerBag);
    }
  }, [registerPopover, registerBag]);

  const isFocusWithinPopoverGroup = useEvent(() => {
    return (
      groupContext?.isFocusWithinPopoverGroup() ??
      (ownerDocument?.activeElement &&
        (button?.contains(ownerDocument.activeElement) || panel?.contains(ownerDocument.activeElement)))
    );
  });

  // Handle focus out
  useEventListener(
    ownerDocument?.defaultView,
    'focus',
    (event) => {
      if (popoverState !== OpenClosedState.Open) return;
      if (isFocusWithinPopoverGroup()) return;
      if (!button) return;
      if (!panel) return;
      if (beforePanelSentinel.current?.contains?.(event.target as HTMLElement)) return;
      if (afterPanelSentinel.current?.contains?.(event.target as HTMLElement)) return;

      dispatch({ type: ActionTypes.ClosePopover });
    },
    true,
  );

  // Handle outside click
  useOutsideClick(
    [button, panel],
    (event, target) => {
      dispatch({ type: ActionTypes.ClosePopover });

      if (!isFocusableElement(target, FocusableMode.Loose)) {
        event.preventDefault();
        button?.focus();
      }
    },
    popoverState === OpenClosedState.Open,
  );

  const close = useEvent(
    (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null> | React.MouseEvent<HTMLElement>) => {
      dispatch({ type: ActionTypes.ClosePopover });

      const restoreElement = (() => {
        if (!focusableElement) return button;
        if (focusableElement instanceof HTMLElement) return focusableElement;
        if ('current' in focusableElement && focusableElement.current instanceof HTMLElement)
          return focusableElement.current;

        return button;
      })();

      restoreElement?.focus();
    },
  );

  const popoverAPIContextValues = React.useMemo<PopoverAPIContextValues>(
    () => ({ close, isPortalled }),
    [close, isPortalled],
  );

  const slot = React.useMemo<PopoverRenderPropArg>(() => {
    return {
      open: popoverState === OpenClosedState.Open,
      close,
    };
  }, [popoverState, close]);

  const theirProps = props;
  const ourProps = { ref: popoverRef };

  return (
    <PopoverContext.Provider value={reducerBag}>
      <PopoverAPIContext.Provider value={popoverAPIContextValues}>
        <OpenClosedProvider
          value={match(popoverState, {
            [OpenClosedState.Open]: OpenClosedState.Open,
            [OpenClosedState.Closed]: OpenClosedState.Closed,
          })}
        >
          {render({
            ourProps,
            theirProps,
            slot,
            defaultTag: DEFAULT_TAG,
            name: COMPONENT_NAME,
          })}
        </OpenClosedProvider>
      </PopoverAPIContext.Provider>
    </PopoverContext.Provider>
  );
};

const PopoverWidgetRoot = forwardRefWithAs(_PopoverWidgetRoot);

export { PopoverWidgetRoot };
export default PopoverWidgetRoot;
