import * as React from 'react';

import { forwardRefWithAs, render } from '../../../../core';
import { useId, useSyncRefs } from '../../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../../types';
import { useModalContext } from './Modal.Widget.Context';
import { ModalWidgetRenderPropArg } from './Modal.Widget.types';

const COMPONENT_NAME = 'Root__Modal__Title';
const DEFAULT_TAG: RootUIReactTag = 'h5';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalTitleProps extends ElementProps {}
export interface ModalTitleRenderPropArg extends ModalWidgetRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;

export const ModalWidgetTitle = forwardRefWithAs(
  <Tag extends React.ElementType = typeof DEFAULT_TAG>(
    props: RootUIProps<Tag, ModalTitleRenderPropArg, PropsWeControl> & ModalTitleProps,
    ref: React.Ref<ElementType>,
  ) => {
    const id = `RootUI__Modal__Title-${useId()}`;
    const [{ setModalTitleId, visible }] = useModalContext(COMPONENT_NAME);
    const titleRef = useSyncRefs(ref);

    React.useEffect(() => {
      setModalTitleId(id);
      return () => setModalTitleId(null);
    }, [id, setModalTitleId]);

    const ourProps = React.useMemo(() => {
      return {
        id,
        ref: titleRef,
      };
    }, [id, titleRef]);

    const theirProps = props;

    const slot = React.useMemo<ModalTitleRenderPropArg>(() => ({ visible }), [visible]);

    return render({
      defaultTag: DEFAULT_TAG,
      name: COMPONENT_NAME,
      ourProps,
      slot,
      theirProps,
    });
  },
);
