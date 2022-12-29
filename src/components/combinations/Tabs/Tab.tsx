import * as React from 'react';
import { Tab as BaseTab } from '@headlessui/react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__Tab';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Is selected tab
   */
  selected?: boolean;
}

export const Tab = React.forwardRef<ElementType, TabProps>(
  ({ children, className, scale = 'md', intent = 'primary', selected, ...rests }, ref) => {
    return (
      <BaseTab {...rests} ref={ref} as="li" role="tab" className="w-full">
        {({ selected }) => (
          <div
            className={clsx(
              CLASSNAME,
              className,
              toScaleMatch({
                xs: () => 'py-1 px-2',
                sm: () => 'py-1.5 px-2.5',
                md: () => 'py-1.5 px-3',
                lg: () => 'py-2 px-3.5',
                xl: () => 'py-2 px-4',
              })(scale),
              toIntentMatch({
                default: () => clsx('ring-default dark:ring-default-8', { 'bg-default': selected }),
                neutral: () => clsx('ring-neutral dark:ring-neutral-8', { 'bg-neutral': selected }),
                light: () => clsx('ring-light dark:ring-light-8', { 'bg-light': selected }),
                dark: () => clsx('ring-dark dark:ring-dark-8', { 'bg-dark': selected }),
                primary: () => clsx('ring-primary dark:ring-primary-8', { 'bg-primary': selected }),
                info: () => clsx('ring-info dark:ring-info-8', { 'bg-info': selected }),
                success: () => clsx('ring-success dark:ring-success-8', { 'bg-success': selected }),
                warning: () => clsx('ring-warning dark:ring-warning-8', { 'bg-warning': selected }),
                danger: () => clsx('ring-danger dark:ring-danger-8', { 'bg-danger': selected }),
              })(intent),
              'ring-offset focus:outline-none focus:ring',
              'w-full',
              'rounded-lg shadow',
              'cursor-pointer',
            )}
          >
            {children}
          </div>
        )}
      </BaseTab>
    );
  },
);
