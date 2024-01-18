import { Switch as BaseSwitch } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '~/system';

const CLASSNAME = 'Root__Switch';
type ElementType = HTMLInputElement;

export interface SwitchProps {
  checked?: boolean;

  children?: React.ReactNode;

  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  /**
   * @default primary
   */
  intent?: RootIntent;
  name?: string;
  onChange?: (checked: boolean) => void;
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
  value?: string;
}

export const Switch = React.forwardRef<ElementType, SwitchProps>(({ children, className, ...others }, ref) => {
  const { checked, disabled } = others;
  const { intent, scale } = useRootUI({
    defaultIntent: 'primary',
    defaultScale: 'md',
    intent: others?.intent,
    scale: others?.scale,
  });

  return (
    <BaseSwitch.Group>
      <BaseSwitch
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'relative',
          'inline-flex items-center shrink-0',
          'border border-cream-3 dark:border-space-3',
          'rounded-full shadow',
          'focus:outline-none focus-visible:ring-2',
          'transition-colors duration-200 ease-in-out',
          disabled ? 'opacity-95 cursor-not-allowed' : 'cursor-pointer',
          {
            'bg-white dark:bg-black': !checked,
          },
          toScaleMatch({
            lg: () => 'h-[34px] w-[68px]',
            md: () => 'h-[30px] w-[60px]',
            sm: () => 'h-[26px] w-[52px]',
            xl: () => 'h-[38px] w-[76px]',
            xs: () => 'h-[22px] w-[44px]',
          })(scale),
          toIntentMatch({
            accent: () => clsx('solid-accent dark:solid-accent'),
            danger: () => clsx('solid-danger dark:solid-danger'),
            info: () => clsx('solid-info dark:solid-info'),
            neutral: () => clsx('solid-neutral dark:solid-neutral'),
            primary: () => clsx('solid-primary dark:solid-primary'),
            success: () => clsx('solid-success dark:solid-success'),
            warning: () => clsx('solid-warning dark:solid-warning'),
          })(intent),
        )}
        ref={ref as any}
      >
        <span
          className={clsx(
            'inline-flex justify-center items-center',
            'border-2',
            checked
              ? 'bg-white dark:bg-white border-cream'
              : 'bg-cream-2 dark:bg-space-2 border-cream-3 dark:border-space-3',
            'rounded-full shadow-xl',
            'transform transition',
            toScaleMatch({
              lg: () => clsx('h-[28px] w-[28px]', checked ? 'translate-x-[36px]' : 'translate-x-[2px]'),
              md: () => clsx('h-[24px] w-[24px]', checked ? 'translate-x-[32px]' : 'translate-x-[2px]'),
              sm: () => clsx('h-[20px] w-[20px]', checked ? 'translate-x-[28px]' : 'translate-x-[2px]'),
              xl: () => clsx('h-[32px] w-[32px]', checked ? 'translate-x-[40px]' : 'translate-x-[2px]'),
              xs: () => clsx('h-[16px] w-[16px]', checked ? 'translate-x-[24px]' : 'translate-x-[2px]'),
            })(scale),
          )}
        >
          {children}
        </span>
      </BaseSwitch>
    </BaseSwitch.Group>
  );
});
