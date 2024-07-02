import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useNavExpandedContext } from './Nav.ExpandedContext';

const CLASSNAME = 'Root__Layout__NavExpandedTrigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

type NavExpandedTriggerRenderer = ((props: { isFloatingOpen: boolean }) => React.ReactNode) | React.ReactNode;
export interface NavExpandedTriggerProps {
  children: NavExpandedTriggerRenderer;
}

export const NavExpandedTrigger = React.forwardRef<
  ElementType,
  Omit<ElementProps, 'children'> & NavExpandedTriggerProps
>(({ className, children, ...others }, ref) => {
  const { floating, intersection, isFloatingOpen } = useNavExpandedContext();
  const { refs } = floating;

  const mergedRefs = useMergeRefs([refs.setReference, ref]);

  return (
    <div
      {...others}
      className={clsx(CLASSNAME, className)}
      ref={mergedRefs}
      role="menuitem"
      {...intersection.getReferenceProps()}
    >
      {typeof children === 'function' ? children({ isFloatingOpen }) : children}
    </div>
  );
});
