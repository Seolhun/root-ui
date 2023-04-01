import clsx from 'clsx';
import * as React from 'react';

import { forwardRefWithAs, render } from '../../../core';
import { useSyncRefs, useId } from '../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../types';

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
  {
    scaleClassName,
    intentClassName,
    className,
    ...others
  }: RootUIProps<Tag, BoxRenderPropArg, PropsWeControl> & BoxProps & JSX.IntrinsicElements[Tag],
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
      ...others,
      className: clsx(scaleClassName, intentClassName, className),
    },
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    slot: {},
  });
});

export { Box };
export default Box;
