import clsx from 'clsx';
import * as React from 'react';

import { ModalWidgetBackdrop } from './Widgets/Modal.Widget.Backdrop';

const CLASSNAME = 'Root__Modal__Backdrop';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalBackdropProps extends ElementProps {}

export const ModalBackdrop = React.forwardRef<ElementType, ModalBackdropProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <ModalWidgetBackdrop
        {...others}
        ref={ref}
        tabIndex={-1}
        className={clsx(
          CLASSNAME,
          className,
          'fixed',
          'inset-0 md:inset-0',
          'w-full h-full',
          'bg-dark-3',
          'opacity-60',
        )}
      />
    );
  },
);
