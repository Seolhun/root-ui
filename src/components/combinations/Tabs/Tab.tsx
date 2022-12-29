import * as React from 'react';
import { Tab as BaseTab } from '@headlessui/react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { useRootGroupContext } from '../../common';

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
}

export const Tab = React.forwardRef<ElementType, TabProps>(({ children, className, ...rests }, ref) => {
  const { scale, intent } = useRootGroupContext();

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
              default: () => clsx(selected ? 'text-default dark:text-default-5' : 'hover:bg-default-1/50'),
              neutral: () => clsx(selected ? 'text-neutral dark:text-neutral-5' : 'hover:bg-neutral-1/50'),
              light: () => clsx(selected ? 'text-light dark:text-light-5' : 'hover:bg-light-1/50'),
              dark: () => clsx(selected ? 'text-dark dark:text-dark-5' : 'hover:bg-dark-1/50'),
              primary: () => clsx(selected ? 'text-primary dark:text-primary-5' : 'hover:bg-primary-1/50'),
              info: () => clsx(selected ? 'text-info dark:text-info-5' : 'hover:bg-info-1/50'),
              success: () => clsx(selected ? 'text-success dark:text-success-5' : 'hover:bg-success-1/50'),
              warning: () => clsx(selected ? 'text-warning dark:text-warning-5' : 'hover:bg-warning-1/50'),
              danger: () => clsx(selected ? 'text-danger dark:text-danger-5' : 'hover:bg-danger-1/50'),
            })(intent),
            {
              'bg-light-1/90 dark:bg-dark-8/90': selected,
            },
            'w-full text-center',
            'transition',
            'rounded-xl',
            'cursor-pointer',
          )}
        >
          {children}
        </div>
      )}
    </BaseTab>
  );
});
