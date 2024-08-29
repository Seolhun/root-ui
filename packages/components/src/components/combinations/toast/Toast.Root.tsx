import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { useEffectOnce } from '~/hooks';

import { ToastCloseButton } from './Toast.CloseButton';
import { ToastMessage } from './Toast.Message';
import { ToastTitle } from './Toast.Title';
import { ToastUniqueProps } from './Toast.types';
import { ToastContext } from './ToastContext';

const CLASSNAME = 'Root__Toast';

export interface ToastRootProps extends ToastUniqueProps {
  className?: string;

  timeout: number;
}

export const ToastRoot = ({ id, className, children, message, timeout, title, visible }: ToastRootProps) => {
  const timeoutRef = React.useRef<any>(null);
  const [, dispatch] = React.useContext(ToastContext);

  useEffectOnce(() => {
    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: 'CLOSE_TOAST',
        payload: id,
      });
    }, timeout);

    return () => {
      clearTimeout(timeoutRef.current);
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
          exit={{
            opacity: 0,
            x: '120%',
          }}
          initial={{
            opacity: 0,
            x: '100%',
          }}
          className={clsx(CLASSNAME, className, 'bg-cream-1 dark:bg-space-1', 'rounded shadow', 'py-4 px-6')}
        >
          {children ? (
            children
          ) : (
            <>
              <div className="flex justify-between items-start mb-2">
                <ToastTitle>{title}</ToastTitle>
                <ToastCloseButton toastId={id} />
              </div>
              <div className="flex">
                <ToastMessage>{message}</ToastMessage>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
