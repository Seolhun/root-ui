import { RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch } from '~/system';

import { ModalWidgetPanel, useModalContext } from '../widgets';

const CLASSNAME = 'Root__Modal__Panel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalPanelProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
}

export const ModalPanel = React.forwardRef<ElementType, ModalPanelProps>(
  ({ children, className, scale = 'md', ...others }, ref) => {
    const [{ visible }] = useModalContext('Modal');

    return (
      <ModalWidgetPanel
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'relative',
          'block',
          'bg-white',
          toScaleMatch({
            lg: () => 'w-full md:w-10/12',
            md: () => 'w-full md:w-10/12',
            sm: () => 'w-full md:w-10/12',
            xl: () => 'w-full md:w-8/12',
            xs: () => 'w-full md:w-12/12',
          })(scale),
          'text-space-2 dark:text-cream-2',
          'bg-cream-1 dark:bg-space-1',
          'border border-cream-3 dark:border-space-3',
          'min-h-full h-auto md:min-h-auto md:h-auto',
          'py-4 px-6',
          'm-auto md:my-12',
          'rounded-none md:rounded',
          'shadow',
          'transform transition-all origin-top',
          {
            'animate-[fade-in_0.2s_ease-in-out]': visible,
          },
        )}
        ref={ref}
      >
        {children}
      </ModalWidgetPanel>
    );
  },
);
