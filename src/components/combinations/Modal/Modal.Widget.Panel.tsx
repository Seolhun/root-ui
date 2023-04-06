import * as React from 'react';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

import { forwardRefWithAs, render } from '../../../core';
import { useSyncRefs, useId, useEvent } from '../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../types';

const COMPONENT_NAME = 'Root__Modal__Panel';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalWidgetPanelProps extends ElementProps {}
export interface ModalPanelRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'onClick'>;

export const ModalWidgetPanel = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalPanelRenderPropArg, PropsWeControl> & ModalWidgetPanelProps,
    ref: React.Ref<ElementType>,
  ) => {
    const id = `rootui-modal-panel-${useId()}`;
    const [{ visible }, state] = useModalContext(COMPONENT_NAME);
    const panelRef = useSyncRefs(ref, state.panelRef);

    const handleClick = useEvent((event: React.MouseEvent) => {
      event.stopPropagation();
    });

    const ourProps = React.useMemo(() => {
      return {
        ref: panelRef,
        id,
        onClick: handleClick,
      };
    }, [id, panelRef, handleClick]);

    const theirProps = props;

    const slot = React.useMemo<ModalPanelRenderPropArg>(() => ({ visible }), [visible]);

    return render({
      ourProps,
      theirProps,
      defaultTag: DEFAULT_TAG,
      name: COMPONENT_NAME,
      slot,
    });
  },
);
