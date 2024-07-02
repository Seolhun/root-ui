import { Radio as HeadlessRadio, RadioProps as HeadlessRadioProps } from '@headlessui/react';
import { RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch, toScaleMatch } from '~/system';
import { OmitBy } from '~/types';

const CLASSNAME = 'Root__Radio';
type ElementType = HTMLSpanElement;

export interface RadioInputProps extends OmitBy<HeadlessRadioProps<'span'>, 'as'> {
  /**
   * @default primary
   */
  intent?: RootIntentType;
  /**
   * @default md
   */
  scale?: RootScaleType;
}

export const RadioInput = React.forwardRef<ElementType, RadioInputProps>(
  ({ className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <HeadlessRadio
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'group',
          'inline-flex items-center justify-center',
          'rounded-full',
          'p-1',
          'border border-neutral-2 dark:border-neutral-8',
          'bg-cream-1 dark:bg-space-1',
          'cursor-pointer',
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-75',
          '*:data-[checked]:data-[disabled]:bg-neutral',
          '*:data-[checked]:data-[disabled]:dark:bg-neutral-6',
          toIntentMatch({
            accent: () => clsx('data-[checked]:bg-accent data-[checked]:dark:bg-accent'),
            danger: () => clsx('data-[checked]:bg-danger data-[checked]:dark:bg-danger'),
            info: () => clsx('data-[checked]:bg-info data-[checked]:dark:bg-info'),
            neutral: () => clsx('data-[checked]:bg-neutral data-[checked]:dark:bg-neutral'),
            primary: () => clsx('data-[checked]:bg-primary data-[checked]:dark:bg-primary'),
            success: () => clsx('data-[checked]:bg-success data-[checked]:dark:bg-success'),
            warning: () => clsx('data-[checked]:bg-warning data-[checked]:dark:bg-warning'),
          })(intent),
          toScaleMatch({
            lg: () => 'size-16',
            md: () => 'size-14',
            sm: () => 'size-12',
            xl: () => 'size-18',
            xs: () => 'size-10',
          })(scale),
        )}
        as="span"
        ref={ref}
      >
        <svg
          className={clsx('!bg-transparent', 'rounded-full', 'stroke-cream-1 dark:stroke-cream-1')}
          fill="none"
          viewBox="0 0 14 14"
        >
          <path d="M3 8L6 11L11 3.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </HeadlessRadio>
    );
  },
);
