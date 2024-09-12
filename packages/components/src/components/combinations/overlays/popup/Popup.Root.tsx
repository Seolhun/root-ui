import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { popup } from './Popup.styles';

const CLASSNAME = 'Root__Popup';

export type PopupProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PopupRoot({ children, className }: PopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={clsx(CLASSNAME, className, root())}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

const { root } = popup();
