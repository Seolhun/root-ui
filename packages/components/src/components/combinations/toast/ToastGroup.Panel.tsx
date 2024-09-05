import clsx from 'clsx';
import * as React from 'react';
import { tv } from 'tailwind-variants';

import { OmitBy } from '~/types';

import { ToastPlacement, ToastRenderer } from './Toast.types';
import { useToastContext } from './ToastContext';

const CLASSNAME = 'Root__ToastGroup__Panel';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ToastGroupPanelProps {
  /**
   * Custom renderer for the toast
   */
  children: ToastRenderer;
  /**
   * @default top-right
   */
  placement?: ToastPlacement;
  /**
   * @default 50
   */
  zIndex?: number;
}

export const ToastGroupPanel = React.forwardRef<ElementType, OmitBy<ElementProps, 'children'> & ToastGroupPanelProps>(
  ({ children, className, placement = 'top-right', zIndex = 50 }, ref) => {
    const [toasts] = useToastContext();

    return (
      <section className={clsx(CLASSNAME, className, toast({ placement }))} ref={ref} style={{ zIndex }}>
        {children({ toasts })}
      </section>
    );
  },
);

const toast = tv({
  base: 'fixed',
  variants: {
    placement: {
      'bottom-left': 'top-auto bottom-8 left-4 right-4 sm:right-auto',
      'bottom-right': 'top-auto bottom-8 right-4 left-4 sm:left-auto',
      'top-left': 'top-20 right-4 bottom-auto left-4 sm:right-auto',
      'top-right': 'top-20 left-4 bottom-auto right-4 sm:left-auto',
    },
  },
});
