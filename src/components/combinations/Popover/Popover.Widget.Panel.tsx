import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { useSyncRefs, useId, useEvent, useOwnerDocument, useTabDirection, TabDirection } from '../../../hooks';
import { forwardRefWithAs, PropsForFeatures, render, RenderFeatures } from '../../../core';
import {
  Focus,
  focusIn,
  getFocusableElements,
  Hidden,
  HiddenFeatures,
  OpenClosedState,
  useOpenClosed,
} from '../../../tools';
import { KeyboardKeyMap } from '../../../constants';
import { match } from '../../../utils';
import { PopoverPanelContext, usePopoverAPIContext, usePopoverContext } from './Popover.Widget.Context';
import { PopoverRenderPropArg } from './Popover.Widget.types';
import { ActionTypes } from './Popover.Widget.reducer';

const COMPONENT_NAME = 'Root__Popover__Panel';
const DEFAULT_TAG: RootUIReactTag = 'div';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface PopoverWidgetPanelProps {}
export interface PopoverPanelRenderPropArg extends PopoverRenderPropArg {
  focus?: boolean;
}

type PropsWeControl = keyof Pick<ElementProps, 'id' | 'onKeyDown'>;
const PanelRenderFeatures = RenderFeatures.RenderStrategy | RenderFeatures.Static;

const _PopoverWidgetPanel = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, PopoverPanelRenderPropArg, PropsWeControl> &
    PropsForFeatures<typeof PanelRenderFeatures> &
    PopoverWidgetPanelProps &
    ElementProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { focus = false, ...rests } = props;

  const [state, dispatch] = usePopoverContext(COMPONENT_NAME);
  const { close, isPortalled } = usePopoverAPIContext(COMPONENT_NAME);
  const beforePanelSentinelId = `rootui-focus-sentinel-before-${useId()}`;
  const afterPanelSentinelId = `rootui-focus-sentinel-after-${useId()}`;
  const internalPanelRef = React.useRef<HTMLDivElement | null>(null);
  const ownerDocument = useOwnerDocument(internalPanelRef);

  const panelRef = useSyncRefs(internalPanelRef, ref, (panel) => {
    dispatch({ type: ActionTypes.SetPanel, panel });
  });

  const usesOpenClosedState = useOpenClosed();
  const visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === OpenClosedState.Open;
    }
    return state.popoverState === OpenClosedState.Open;
  })();

  const handleKeyDown = useEvent((event: KeyboardEvent) => {
    switch (event.key) {
      case KeyboardKeyMap.Escape: {
        if (state.popoverState !== OpenClosedState.Open) {
          return;
        }
        if (!internalPanelRef.current) {
          return;
        }
        if (ownerDocument?.activeElement && !internalPanelRef.current.contains(ownerDocument.activeElement)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        dispatch({ type: ActionTypes.ClosePopover });
        state.button?.focus();
        break;
      }
    }
  });

  // Unlink on "unmount" children
  React.useEffect(() => {
    if (props.static) {
      return;
    }

    if (state.popoverState === OpenClosedState.Closed && (props.unmount ?? true)) {
      dispatch({ type: ActionTypes.SetPanel, panel: null });
    }
  }, [state.popoverState, props.unmount, props.static, dispatch]);

  // Move focus within panel
  React.useEffect(() => {
    if (!focus) {
      return;
    }
    if (state.popoverState !== OpenClosedState.Open) {
      return;
    }
    if (!internalPanelRef.current) {
      return;
    }

    const activeElement = ownerDocument?.activeElement as HTMLElement;
    // Already focused within Modal
    if (internalPanelRef.current.contains(activeElement)) {
      return;
    }
    focusIn(internalPanelRef.current, Focus.First);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, internalPanelRef, state.popoverState]);

  const ourProps = React.useMemo(() => {
    return {
      ref: panelRef,
      id: state.panelId,
      onKeyDown: handleKeyDown,
      onBlur:
        focus && state.popoverState === OpenClosedState.Open
          ? (event: React.FocusEvent) => {
              const el = event.relatedTarget as HTMLElement;
              if (!el) return;
              if (!internalPanelRef.current) return;
              if (internalPanelRef.current?.contains(el)) return;

              dispatch({ type: ActionTypes.ClosePopover });

              if (
                state.beforePanelSentinel.current?.contains?.(el) ||
                state.afterPanelSentinel.current?.contains?.(el)
              ) {
                el.focus({ preventScroll: true });
              }
            }
          : undefined,
      tabIndex: -1,
    };
  }, [
    dispatch,
    focus,
    handleKeyDown,
    panelRef,
    state.afterPanelSentinel,
    state.beforePanelSentinel,
    state.panelId,
    state.popoverState,
  ]);

  const theirProps = rests;

  const slot = React.useMemo<PopoverRenderPropArg>(() => {
    return {
      open: state.popoverState === OpenClosedState.Open,
      close,
    };
  }, [state, close]);

  const direction = useTabDirection();
  const handleBeforeFocus = useEvent(() => {
    const el = internalPanelRef.current as HTMLElement;
    if (!el) {
      return;
    }

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => {
          focusIn(el, Focus.First);
        },
        [TabDirection.Backwards]: () => {
          // Coming from the Popover.Panel (which is portalled to somewhere else). Let's redirect
          // the focus to the Popover.Button again.
          state.button?.focus({ preventScroll: true });
        },
      });
    }
    run();
  });

  const handleAfterFocus = useEvent(() => {
    const el = internalPanelRef.current as HTMLElement;
    if (!el) {
      return;
    }

    function run() {
      match(direction.current, {
        [TabDirection.Forwards]: () => {
          if (!state.button) {
            return;
          }

          const elements = getFocusableElements();
          const idx = elements.indexOf(state.button);
          const before = elements.slice(0, idx + 1);
          const after = elements.slice(idx + 1);
          const combined = [...after, ...before];

          // Ignore sentinel buttons and items inside the panel
          for (const element of combined.slice()) {
            if (element?.id?.startsWith?.('rootui-focus-sentinel-') || state.panel?.contains(element)) {
              const idx = combined.indexOf(element);
              if (idx !== -1) combined.splice(idx, 1);
            }
          }

          focusIn(combined, Focus.First, false);
        },
        [TabDirection.Backwards]: () => focusIn(el, Focus.Last),
      });
    }
    run();
  });

  return (
    <PopoverPanelContext.Provider value={state.panelId}>
      {visible && isPortalled && (
        <Hidden
          id={beforePanelSentinelId}
          ref={state.beforePanelSentinel}
          features={HiddenFeatures.Focusable}
          as="button"
          type="button"
          onFocus={handleBeforeFocus}
        />
      )}
      {render({
        ourProps,
        theirProps,
        slot,
        defaultTag: DEFAULT_TAG,
        features: PanelRenderFeatures,
        visible,
        name: COMPONENT_NAME,
      })}
      {visible && isPortalled && (
        <Hidden
          id={afterPanelSentinelId}
          ref={state.afterPanelSentinel}
          features={HiddenFeatures.Focusable}
          as="button"
          type="button"
          onFocus={handleAfterFocus}
        />
      )}
    </PopoverPanelContext.Provider>
  );
};

const PopoverWidgetPanel = forwardRefWithAs(_PopoverWidgetPanel);

export { PopoverWidgetPanel };
export default PopoverWidgetPanel;
