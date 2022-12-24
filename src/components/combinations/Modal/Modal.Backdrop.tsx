import React from 'react';
import classNames from 'classnames';

import { ModalWidgetBackdrop } from './Modal.Widget.Backdrop';

const CLASSNAME = 'Root__Modal__Backdrop';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalBackdropProps extends ElementProps {}

const ModalBackdrop = React.forwardRef<ElementType, ModalBackdropProps>(({ className, children, ...rests }, ref) => {
  return (
    <ModalWidgetBackdrop
      {...rests}
      ref={ref}
      tabIndex={-1}
      className={classNames(
        CLASSNAME,
        className,
        'fixed',
        'inset-0 md:inset-0',
        'w-full h-full',
        'bg-dark-300',
        'opacity-60',
      )}
    />
  );
});

export { ModalBackdrop };
export default ModalBackdrop;
