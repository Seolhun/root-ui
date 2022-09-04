import React from 'react';

import { forwardRefWithAs, PropsForFeatures, render, RenderFeatures } from '../../../core';
import { isDisabledReactIssue7711 } from '../../../utils/bugs';
import { OpenClosedState, useOpenClosed } from '../../../tools';
import { RootUIProps, RootUIReactTag } from '../../../types';
import { useSyncRefs, useId, useEvent } from '../../../hooks';

import { usePopoverContext } from './Popover.Widget.Context';
import { ActionTypes } from './Popover.Widget.reducer';

const COMPONENT_NAME = 'Root__Popover__Overlay';
const DEFAULT_TAG: RootUIReactTag = 'div';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface PopoverWidgetOverlayProps {}

export interface PopoverOverlayRenderPropArg {
  open: boolean;
}

type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden' | 'onClick'>;

const OverlayRenderFeatures = RenderFeatures.RenderStrategy | RenderFeatures.Static;

const _PopoverWidgetOverlay = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, PopoverOverlayRenderPropArg, PropsWeControl> & PropsForFeatures<typeof OverlayRenderFeatures>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const [{ popoverState }, dispatch] = usePopoverContext(COMPONENT_NAME);
  const id = `rootui-popover-overlay-${useId()}`;
  const usesOpenClosedState = useOpenClosed();
  const overlayRef = useSyncRefs(ref);

  const visible = (() => {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === OpenClosedState.Open;
    }
    return popoverState === OpenClosedState.Open;
  })();

  const handleClick = useEvent((event: React.MouseEvent) => {
    if (isDisabledReactIssue7711(event.currentTarget)) return event.preventDefault();
    dispatch({ type: ActionTypes.ClosePopover });
  });

  const ourProps = React.useMemo(() => {
    return {
      ref: overlayRef,
      id,
      'aria-hidden': true,
      onClick: handleClick,
    };
  }, [handleClick, id, overlayRef]);

  const theirProps = props;

  const slot = React.useMemo<PopoverOverlayRenderPropArg>(() => {
    return {
      open: popoverState === OpenClosedState.Open,
    };
  }, [popoverState]);

  return render({
    ourProps,
    theirProps,
    slot,
    defaultTag: DEFAULT_TAG,
    features: OverlayRenderFeatures,
    visible,
    name: COMPONENT_NAME,
  });
};

const PopoverWidgetOverlay = forwardRefWithAs(_PopoverWidgetOverlay);

export { PopoverWidgetOverlay };
export default PopoverWidgetOverlay;
