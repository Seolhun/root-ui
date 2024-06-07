import * as React from 'react';

import { forwardRefWithAs, render } from '../../../../core';
import { useId, useSyncRefs } from '../../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../../types';

import { useModalContext } from './Modal.Widget.Context';
import { ModalWidgetRenderPropArg } from './Modal.Widget.types';

const COMPONENT_NAME = 'Root__Modal__Backdrop';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalBackdropProps extends ElementProps {}
export interface ModalBackdropRenderPropArg extends ModalWidgetRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'aria-hidden' | 'id'>;

export const ModalWidgetBackdrop = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalBackdropRenderPropArg, PropsWeControl> & ModalBackdropProps,
    ref: React.Ref<ElementType>,
  ) => {
    const id = `RootUI__Modal__Backdrop-${useId()}`;
    const [{ visible }, state] = useModalContext(COMPONENT_NAME);
    const backdropRef = useSyncRefs(ref);

    React.useEffect(() => {
      if (state.panelRef.current === null) {
        throw new Error(`A <Modal.Backdrop /> component is being used, but a <Modal.Panel /> component is missing.`);
      }
    }, [state.panelRef]);

    const ourProps = React.useMemo(() => {
      return {
        id,
        'aria-hidden': true,
        ref: backdropRef,
      };
    }, [id, backdropRef]);

    const theirProps = props;

    const slot = React.useMemo<ModalBackdropRenderPropArg>(() => ({ visible }), [visible]);

    return render({
      defaultTag: DEFAULT_TAG,
      name: COMPONENT_NAME,
      ourProps,
      slot,
      theirProps,
    });
  },
);
