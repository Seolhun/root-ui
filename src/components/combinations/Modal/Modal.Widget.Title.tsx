import * as React from 'react';

import { useModalContext } from './Modal.Widget.Context';
import { ModalRenderPropArg } from './Modal.Widget.types';

import { forwardRefWithAs, render } from '../../../core';
import { useSyncRefs, useId } from '../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../types';

const COMPONENT_NAME = 'Root__Modal__Title';
const DEFAULT_TAG: RootUIReactTag = 'h2';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalTitleProps extends ElementProps {}
export interface ModalTitleRenderPropArg extends ModalRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;

const _ModalWidgetTitle = <Tag extends React.ElementType = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, ModalTitleRenderPropArg, PropsWeControl> & ModalTitleProps,
  ref: React.Ref<ElementType>,
) => {
  const id = `rootui-modal-title-${useId()}`;
  const [{ visible, setModalTitleId }] = useModalContext(COMPONENT_NAME);
  const titleRef = useSyncRefs(ref);

  React.useEffect(() => {
    setModalTitleId(id);
    return () => setModalTitleId(null);
  }, [id, setModalTitleId]);

  const ourProps = React.useMemo(() => {
    return {
      ref: titleRef,
      id,
    };
  }, [id, titleRef]);

  const theirProps = props;

  const slot = React.useMemo<ModalTitleRenderPropArg>(() => ({ visible }), [visible]);

  return render({
    ourProps,
    theirProps,
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot,
  });
};

const ModalWidgetTitle = forwardRefWithAs(_ModalWidgetTitle);

export { ModalWidgetTitle };
export default ModalWidgetTitle;
