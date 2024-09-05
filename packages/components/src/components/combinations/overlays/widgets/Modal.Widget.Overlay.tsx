import * as React from 'react';

import { forwardRefWithAs, render } from '~/core';
import { useEvent, useId, useSyncRefs } from '~/hooks';
import { RootUIProps, RootUIReactTag } from '~/types';
import { isDisabledReactIssue7711 } from '~/utils/bugs';

import { useModalContext } from './Modal.Widget.Context';
import { ModalWidgetRenderPropArg } from './Modal.Widget.types';

const COMPONENT_NAME = 'Root__Modal__Overlay';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalWidgetOverlayProps extends ElementProps {}
export interface ModalOverlayRenderPropArg extends ModalWidgetRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'aria-hidden' | 'id' | 'onClick'>;

export const ModalWidgetOverlay = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalOverlayRenderPropArg, PropsWeControl> & ModalWidgetOverlayProps,
    ref: React.Ref<ElementType>,
  ) => {
    const id = `RootUI__Modal__Overlay-${useId()}`;
    const [{ onClose, visible }] = useModalContext(COMPONENT_NAME);
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
      defaultTag: DEFAULT_TAG,
      name: COMPONENT_NAME,
      ourProps,
      slot,
      theirProps,
    });
  },
);
