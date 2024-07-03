import { Tab as HeadlessTab, TabProps as HeadlessTabProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Tab';
type ElementType = HTMLLIElement;

export type TabProps = OmitBy<HeadlessTabProps<'li'>, 'as'>;

export const Tab = React.forwardRef<ElementType, TabProps>(({ className, children, ...others }, ref) => {
  return (
    <HeadlessTab {...others} as="li" className={clsx('w-full', 'outline-none')} ref={ref}>
      {(args) => {
        const { selected } = args;
        return (
          <div
            className={clsx(
              CLASSNAME,
              className,
              'w-full',
              'rounded',
              'cursor-pointer',
              'group-scale-lg:scale-p-lg group-scale-md:scale-p-md group-scale-sm:scale-p-sm group-scale-xl:scale-p-xl group-scale-xs:scale-p-xs',
              {
                [clsx(
                  'group-intent-accent:solid-accent',
                  'group-intent-danger:solid-danger',
                  'group-intent-info:solid-info',
                  'group-intent-neutral:solid-neutral',
                  'group-intent-primary:solid-primary',
                  'group-intent-success:solid-success',
                  'group-intent-warning:solid-warning',
                )]: selected,
                'text-space-1 dark:text-cream-1 hover:bg-neutral-1': !selected,
              },
            )}
          >
            {typeof children === 'function' ? children(args) : children}
          </div>
        );
      }}
    </HeadlessTab>
  );
});
