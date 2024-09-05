import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { useEffectOnce } from '~/hooks';

import { useToastContext } from './ToastContext';

const CLASSNAME = 'Root__Toast';

export interface ToastProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * Unique id of the toast
   */
  id: number;
  /**
   * Timeout of the toast
   * @default 3000
   */
  timeout?: number;
  /**
   * Visibility of the toast
   */
  visible?: boolean;
}

export const ToastRoot = ({ children, className, id, timeout = 3000, visible }: ToastProps) => {
  const [, dispatch] = useToastContext();
  const timeoutRef = React.useRef<any>();

  useEffectOnce(() => {
    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: 'CLOSE_TOAST',
        payload: id,
      });
    }, timeout);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{
            opacity: 1,
            x: '0',
          }}
          className={clsx(
            CLASSNAME,
            className,
            'bg-cream-1 dark:bg-space-1',
            'flex flex-col space-y-2',
            'rounded shadow',
            'py-4 px-6',
          )}
          exit={{
            opacity: 0,
            x: '120%',
          }}
          initial={{
            opacity: 0,
            x: '100%',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
