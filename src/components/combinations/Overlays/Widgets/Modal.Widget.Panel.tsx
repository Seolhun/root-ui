import * as React from 'react';

import { forwardRefWithAs, render } from '~/core';
import { useEvent, useId, useSyncRefs } from '~/hooks';
import { RootUIProps, RootUIReactTag } from '~/types';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

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
    const id = `RootUI__Modal__Panel-${useId()}`;
    const [{ visible }, state] = useModalContext(COMPONENT_NAME);
    const panelRef = useSyncRefs(ref, state.panelRef);

    const handleClick = useEvent((event: React.MouseEvent) => {
      event.stopPropagation();
    });

    const ourProps = React.useMemo(() => {
      return {
        id,
        onClick: handleClick,
        ref: panelRef,
      };
    }, [id, panelRef, handleClick]);

    const theirProps = props;

    const slot = React.useMemo<ModalPanelRenderPropArg>(() => ({ visible }), [visible]);

    return render({
      defaultTag: DEFAULT_TAG,
      name: COMPONENT_NAME,
      ourProps,
      slot,
      theirProps,
    });
  },
);
