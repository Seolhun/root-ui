import React from 'react';
import classNames from 'classnames';

import { RootScale, toScaleMatch } from '../../../system';
import { ModalWidgetPanel } from './Modal.Widget.Panel';
import { useModalContext } from './Modal.Widget.Context';

const CLASSNAME = 'Root__Modal__Panel';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalPanelProps {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const ModalPanel = React.forwardRef<Element, ModalPanelProps & ElementProps>(
  ({ className, children, scale = 'md', ...rests }, ref) => {
    const [{ visible }] = useModalContext('Modal');

    return (
      <ModalWidgetPanel
        {...rests}
        ref={ref}
        className={classNames(
          CLASSNAME,
          className,
          'relative',
          'block',
          'bg-white',
          toScaleMatch({
            xs: () => 'w-full md:w-4/12',
            sm: () => 'w-full md:w-5/12',
            md: () => 'w-full md:w-6/12',
            lg: () => 'w-full md:w-8/12',
            xl: () => 'w-full md:w-10/12',
          })(scale),
          'h-full md:h-auto',
          'm-auto md:my-12',
          'shadow rounded-none md:rounded-2xl',
          'transform transition-all origin-top',
          {
            'animate-[scale-up-0.5_0.2s_ease-in-out]': visible,
          },
        )}
      >
        {children}
      </ModalWidgetPanel>
    );
  },
);

export { ModalPanel };
export default ModalPanel;
