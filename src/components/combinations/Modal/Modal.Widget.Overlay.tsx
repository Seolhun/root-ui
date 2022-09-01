import React from 'react';

import { RootUIProps, RootUIReactTag } from '@/types';
import { useSyncRefs, useId, useEvent } from '@/hooks';
import { forwardRefWithAs, render } from '@/core';
import { isDisabledReactIssue7711 } from '@/utils/bugs';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalWidgetOverlayProps {}

const COMPONENT_NAME = 'Root__Modal__Overlay';
const DEFAULT_TAG: RootUIReactTag = 'div';

export interface ModalOverlayRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden' | 'onClick'>;

const _ModalWidgetOverlay = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, ModalOverlayRenderPropArg, PropsWeControl> & ModalWidgetOverlayProps & ElementProps,
  ref: React.Ref<Element>,
) => {
  const id = `rootui-modal-overlay-${useId()}`;
  const [{ visible, onClose }] = useModalContext(COMPONENT_NAME);
  const overlayRef = useSyncRefs(ref);

  const handleClick = useEvent((event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (isDisabledReactIssue7711(event.currentTarget)) {
      return event.preventDefault();
    }
    event.preventDefault();
    event.stopPropagation();
    onClose();
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

  const slot = React.useMemo<ModalOverlayRenderPropArg>(() => ({ visible }), [visible]);

  return render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot,
  });
};

const ModalWidgetOverlay = forwardRefWithAs(_ModalWidgetOverlay);

export { ModalWidgetOverlay };
export default ModalWidgetOverlay;
