import * as React from 'react';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

import { forwardRefWithAs, render } from '../../../core';
import { useSyncRefs, useId } from '../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../types';

const COMPONENT_NAME = 'Root__Modal__Backdrop';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalBackdropProps extends ElementProps {}
export interface ModalBackdropRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id' | 'aria-hidden'>;

export const ModalWidgetBackdrop = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalBackdropRenderPropArg, PropsWeControl> & ModalBackdropProps,
    ref: React.Ref<ElementType>,
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
  },
);
