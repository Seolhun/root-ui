import { mergeRefs } from '@seolhun/firststage-utils';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { MotionAnimateProps } from '~/types';

import { useNavExpandedContext } from './Nav.ExpandedContext';

const CLASSNAME = 'Root__Layout__NavExpandedPanel';

type ElementType = HTMLDivElement;

export interface NavExpandedPanelProps {
  children?: React.ReactNode;
  className?: string;
}

const animations: MotionAnimateProps = {
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
};

export const NavExpandedPanel = React.forwardRef<ElementType, NavExpandedPanelProps>(({ className, children }, ref) => {
  const { floating, intersection, isFloatingOpen } = useNavExpandedContext();
  const { floatingStyles, refs } = floating;

  const onNavRef = React.useCallback(
    (node: ElementType | null) => {
      mergeRefs(ref)(node);
      refs.setFloating(node);
    },
    [refs, ref],
  );

  return (
    <AnimatePresence>
      {isFloatingOpen && (
        <motion.div
          {...animations}
          className={clsx(CLASSNAME, className, 'bg-cream-1 dark:bg-space-1', 'shadow', 'h-auto')}
          ref={onNavRef}
          role="menubar"
          style={floatingStyles}
          {...intersection.getFloatingProps()}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
