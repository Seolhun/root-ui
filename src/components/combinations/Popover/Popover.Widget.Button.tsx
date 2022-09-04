import React from 'react';

import { forwardRefWithAs, render } from '../../../core';
import { isDisabledReactIssue7711 } from '../../../utils/bugs';
import { KeyboardKeyMap } from '../../../constants';
import {
  useSyncRefs,
  useId,
  useOwnerDocument,
  useEvent,
  TabDirection,
  useResolveButtonType,
  useTabDirection,
} from '../../../hooks';
import { match, toMicrotask } from '../../../utils';
import { Focus, focusIn, Hidden, HiddenFeatures, OpenClosedState } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import {
  usePopoverAPIContext,
  usePopoverContext,
  usePopoverGroupContext,
  usePopoverPanelContext,
} from './Popover.Widget.Context';
import { ActionTypes } from './Popover.Widget.reducer';

const COMPONENT_NAME = 'Root__Popover__Button';
const DEFAULT_TAG: RootUIReactTag = 'button';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface PopoverWidgetButtonProps {}

export interface PopoverWidgetButtonPropArg {
  open: boolean;
}

type PropsWeControl = 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick';

const _PopoverWidgetButton = <TTag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<TTag, PopoverWidgetButtonPropArg, PropsWeControl> & PopoverWidgetButtonProps & ElementProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const [state, dispatch] = usePopoverContext(COMPONENT_NAME);
  const { isPortalled } = usePopoverAPIContext(COMPONENT_NAME);
  const internalButtonRef = React.useRef<HTMLButtonElement | null>(null);

  const sentinelId = `rootui-focus-sentinel-${useId()}`;

  const groupContext = usePopoverGroupContext();
  const closeOthers = groupContext?.closeOthers;

  const panelContext = usePopoverPanelContext();
  const isWithinPanel = panelContext === null ? false : panelContext === state.panelId;

  const buttonRef = useSyncRefs(
    internalButtonRef,
    ref,
    isWithinPanel ? null : (button) => dispatch({ type: ActionTypes.SetButton, button }),
  );
  const withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  const ownerDocument = useOwnerDocument(internalButtonRef);
  const direction = useTabDirection();

  const handleKeyDown = useEvent((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isWithinPanel) {
      if (state.popoverState === OpenClosedState.Closed) return;
      switch (event.key) {
        case KeyboardKeyMap.Space:
        case KeyboardKeyMap.Enter:
          event.preventDefault(); // Prevent triggering a *click* event
          // @ts-expect-error
          event.target.click?.();
          dispatch({ type: ActionTypes.ClosePopover });
          state.button?.focus(); // Re-focus the original opening Button
          break;
      }
    } else {
      switch (event.key) {
        case KeyboardKeyMap.Space:
        case KeyboardKeyMap.Enter:
          event.preventDefault(); // Prevent triggering a *click* event
          event.stopPropagation();
          if (state.popoverState === OpenClosedState.Closed) closeOthers?.(state.buttonId);
          dispatch({ type: ActionTypes.TogglePopover });
          break;

        case KeyboardKeyMap.Escape:
          if (state.popoverState !== OpenClosedState.Open) return closeOthers?.(state.buttonId);
          if (!internalButtonRef.current) return;
          if (ownerDocument?.activeElement && !internalButtonRef.current.contains(ownerDocument.activeElement)) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          dispatch({ type: ActionTypes.ClosePopover });
          break;
      }
    }
  });

  const handleKeyUp = useEvent((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isWithinPanel) return;
    if (event.key === KeyboardKeyMap.Space) {
      // Required for firefox, event.preventDefault() in handleKeyDown for
      // the Space key doesn't cancel the handleKeyUp, which in turn
      // triggers a *click*.
      event.preventDefault();
    }
  });

  const handleClick = useEvent((event: React.MouseEvent) => {
    if (isDisabledReactIssue7711(event.currentTarget)) return;
    if (props.disabled) return;
    if (isWithinPanel) {
      dispatch({ type: ActionTypes.ClosePopover });
      state.button?.focus(); // Re-focus the original opening Button
    } else {
      event.preventDefault();
      event.stopPropagation();
      if (state.popoverState === OpenClosedState.Closed) closeOthers?.(state.buttonId);
      dispatch({ type: ActionTypes.TogglePopover });
      state.button?.focus();
    }
  });

  const handleMouseDown = useEvent((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  });

  const handleFocus = useEvent(() => {
    const el = state.panel as HTMLElement;
    if (!el) return;

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => focusIn(el, Focus.First),
        [TabDirection.Backwards]: () => focusIn(el, Focus.Last),
      });
    }

    // TODO: Cleanup once we are using real browser tests
    if (process.env.NODE_ENV === 'test') {
      toMicrotask(run);
    } else {
      run();
    }
  });

  const visible = state.popoverState === OpenClosedState.Open;

  const type = useResolveButtonType(props, internalButtonRef);

  const ourProps = React.useMemo(() => {
    if (isWithinPanel) {
      return {
        ref: withinPanelButtonRef,
        type,
        onKeyDown: handleKeyDown,
        onClick: handleClick,
      };
    }
    return {
      ref: buttonRef,
      id: state.buttonId,
      type,
      'aria-expanded': props.disabled ? undefined : state.popoverState === OpenClosedState.Open,
      'aria-controls': state.panel ? state.panelId : undefined,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
      onMouseDown: handleMouseDown,
    };
  }, [
    buttonRef,
    handleClick,
    handleKeyDown,
    handleKeyUp,
    handleMouseDown,
    isWithinPanel,
    props.disabled,
    state.buttonId,
    state.panel,
    state.panelId,
    state.popoverState,
    type,
    withinPanelButtonRef,
  ]);

  const theirProps = props;

  const slot = React.useMemo<PopoverWidgetButtonPropArg>(() => {
    return {
      open: visible,
    };
  }, [visible]);

  return (
    <>
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TAG,
        name: COMPONENT_NAME,
      })}
      {visible && !isWithinPanel && isPortalled && (
        <Hidden id={sentinelId} features={HiddenFeatures.Focusable} as="button" type="button" onFocus={handleFocus} />
      )}
    </>
  );
};

const PopoverWidgetButton = forwardRefWithAs(_PopoverWidgetButton);

export { PopoverWidgetButton };
export default PopoverWidgetButton;
