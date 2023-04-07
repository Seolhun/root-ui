import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch } from '~/system';

import { useModalContext, ModalWidgetPanel } from './Widgets';

const CLASSNAME = 'Root__Modal__Panel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalPanelProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const ModalPanel = React.forwardRef<ElementType, ModalPanelProps>(
  ({ className, children, scale = 'md', ...others }, ref) => {
    const [{ visible }] = useModalContext('Modal');

    return (
      <ModalWidgetPanel
        {...others}
        ref={ref}
        className={clsx(
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
          'bg-cream-1 text-space-1',
          'dark:bg-space-1 dark:text-cream-1',
          'min-h-full h-auto md:min-h-auto md:h-auto',
          'py-4 px-6',
          'm-auto md:my-12',
          'rounded-none md:rounded',
          'shadow ',
          'transform transition-all origin-top',
          {
            'animate-[fade-in_0.2s_ease-in-out]': visible,
          },
        )}
      >
        {children}
      </ModalWidgetPanel>
    );
  },
);
