import clsx from 'clsx';
import * as React from 'react';

import { forwardRefWithAs, render } from '../../../core';
import { useId, useSyncRefs } from '../../../hooks';
import { RootUIProps, RootUIReactTag } from '../../../types';

const COMPONENT_NAME = 'Root__Box';
const DEFAULT_TAG: RootUIReactTag = 'div';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

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

export const Box = forwardRefWithAs(function Box<Tag extends keyof JSX.IntrinsicElements = typeof DEFAULT_TAG>(
  {
    className,
    intentClassName,
    scaleClassName,
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
    defaultTag: DEFAULT_TAG,
    name: COMPONENT_NAME,
    ourProps,
    slot: {},
    theirProps: {
      ...others,
      className: clsx(scaleClassName, intentClassName, className),
    },
  });
});
