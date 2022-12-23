import React from 'react';

import { RootUIProps, RootUIReactTag } from '../../../types';
import { useSyncRefs, useId } from '../../../hooks';
import { forwardRefWithAs, render } from '../../../core';
import classNames from 'classnames';

const COMPONENT_NAME = 'Root__Box';
const DEFAULT_TAG: RootUIReactTag = 'div';

type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface BoxProps {
  /**
   * Set RootIntent className
   */
  intentClassName?: string;

  /**
   * Set RootScale className
   */
  scaleClassName?: string;
}
export interface BoxRenderPropArg {}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;

const _Box = <Tag extends keyof JSX.IntrinsicElements = typeof DEFAULT_TAG>(
  props: RootUIProps<Tag, BoxRenderPropArg, PropsWeControl> & BoxProps & JSX.IntrinsicElements[Tag],
  ref: React.Ref<Element>,
) => {
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
      className: classNames(props.scaleClassName, props.intentClassName, props.className),
    },
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot: {},
  });
};

const Box = forwardRefWithAs(_Box);

export { Box };
export default Box;
