import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { useSyncRefs, useId } from '../../../hooks';
import { forwardRefWithAs, render } from '../../../core';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

const COMPONENT_NAME = 'Root__Modal__Backdrop';
const DEFAULT_TAG: RootUIReactTag = 'div';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalBackdropProps {}
export interface ModalBackdropRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden'>;

const _ModalWidgetBackdrop = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, ModalBackdropRenderPropArg, PropsWeControl> & ModalBackdropProps & ElementProps,
  ref: React.Ref<Element>,
) => {
  const id = `rootui-modal-backdrop-${useId()}`;
  const [{ visible }, state] = useModalContext(COMPONENT_NAME);
  const backdropRef = useSyncRefs(ref);

  React.useEffect(() => {
    if (state.panelRef.current === null) {
      throw new Error(`A <Modal.Backdrop /> component is being used, but a <Modal.Panel /> component is missing.`);
    }
  }, [state.panelRef]);

  const ourProps = React.useMemo(() => {
    return {
      ref: backdropRef,
      id,
      'aria-hidden': true,
    };
  }, [id, backdropRef]);

  const theirProps = props;

  const slot = React.useMemo<ModalBackdropRenderPropArg>(() => ({ visible }), [visible]);

  return render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot,
  });
};

const ModalWidgetBackdrop = forwardRefWithAs(_ModalWidgetBackdrop);

export { ModalWidgetBackdrop };
export default ModalWidgetBackdrop;
