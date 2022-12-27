import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { useSyncRefs, useId } from '../../../hooks';
import { forwardRefWithAs, render } from '../../../core';
import clsx from 'clsx';

const COMPONENT_NAME = 'Root__Box';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface BoxProps {
  /**
   * Set RootScale className
   */
  scaleClassName?: string;

  /**
   * Set RootIntent className
   */
  intentClassName?: string;
}
export interface BoxRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;

const Box = forwardRefWithAs(function Box<Tag extends keyof JSX.IntrinsicElements = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, BoxRenderPropArg, PropsWeControl> & BoxProps & JSX.IntrinsicElements[Tag],
  ref: React.Ref<ElementType>,
) {
  const id = `${COMPONENT_NAME}-${useId()}`;
  const rootRef = useSyncRefs(ref);

  const ourProps = React.useMemo(() => {
    return {
      ref: rootRef,
      id,
    };
  }, [rootRef, id]);

  return render({
    ourProps,
    theirProps: {
      ...props,
      className: clsx(props.scaleClassName, props.intentClassName, props.className),
    },
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot: {},
  });
});

export { Box };
export default Box;
