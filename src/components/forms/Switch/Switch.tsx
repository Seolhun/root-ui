import * as React from 'react';
import clsx from 'clsx';
import { Switch as BaseSwitch } from '@headlessui/react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Switch';
type ElementType = HTMLInputElement;

export interface SwitchProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;

  children?: React.ReactNode;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export const Switch = React.forwardRef<ElementType, SwitchProps>(
  ({ className, children, scale = 'md', intent = 'primary', ...others }, ref) => {
    const { checked, disabled } = others;
    return (
      <BaseSwitch.Group>
        <BaseSwitch
          {...others}
          ref={ref as any}
          className={clsx(
            CLASSNAME,
            className,
            'relative',
            'inline-flex items-center shrink-0',
            'bg-cream-1 dark:bg-space-1',
            'border border-cream-3 dark:border-space-3',
            'rounded-full shadow-md',
            'focus:outline-none focus-visible:ring-2',
            'transition-colors duration-200 ease-in-out',
            disabled ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer',
            toScaleMatch({
              xs: () => 'h-[24px] w-[48px]',
              sm: () => 'h-[28px] w-[56px]',
              md: () => 'h-[32px] w-[64px]',
              lg: () => 'h-[36px] w-[72px]',
              xl: () => 'h-[40px] w-[80px]',
            })(scale),
          )}
        >
          <span
            className={clsx(
              'inline-flex justify-center items-center',
              'border',
              'rounded-full shadow-md',
              'transform transition',
              checked ? '' : 'bg-cream-3 dark:bg-space-3 border-cream-3 dark:border-space-3',
              disabled ? 'opacity-80' : '',
              toScaleMatch({
                xs: () => clsx('h-[16px] w-[16px]', checked ? 'translate-x-[28px]' : 'translate-x-[2px]'),
                sm: () => clsx('h-[20px] w-[20px]', checked ? 'translate-x-[32px]' : 'translate-x-[2px]'),
                md: () => clsx('h-[24px] w-[24px]', checked ? 'translate-x-[36px]' : 'translate-x-[2px]'),
                lg: () => clsx('h-[28px] w-[28px]', checked ? 'translate-x-[40px]' : 'translate-x-[2px]'),
                xl: () => clsx('h-[32px] w-[32px]', checked ? 'translate-x-[44px]' : 'translate-x-[2px]'),
              })(scale),
              toIntentMatch({
                neutral: () => clsx({ 'bg-neutral border-neutral-6': checked }),
                light: () => clsx({ 'bg-light border-light-6': checked }),
                dark: () => clsx({ 'bg-dark border-dark-6': checked }),
                primary: () => clsx({ 'bg-primary border-primary-6': checked }),
                info: () => clsx({ 'bg-info border-info-6': checked }),
                success: () => clsx({ 'bg-success border-success-6': checked }),
                accent: () => clsx({ 'bg-accent border-accent-6': checked }),
                warning: () => clsx({ 'bg-warning border-warning-6': checked }),
                danger: () => clsx({ 'bg-danger border-danger-6': checked }),
              })(intent),
            )}
          >
            {children}
          </span>
        </BaseSwitch>
      </BaseSwitch.Group>
    );
  },
);
