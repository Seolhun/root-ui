import { Switch as BaseSwitch } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUIContext } from '../../../system';

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
    const rootUIContext = useRootUIContext();

    const lastScale = rootUIContext.scale || scale;
    const lastIntent = rootUIContext.intent || intent;
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
            'border border-cream-3 dark:border-space-3',
            'rounded-full shadow',
            'focus:outline-none focus-visible:ring-2',
            'transition-colors duration-200 ease-in-out',
            disabled ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer',
            {
              'bg-white dark:bg-black': !checked,
            },
            toScaleMatch({
              xs: () => 'h-[22px] w-[44px]',
              sm: () => 'h-[26px] w-[52px]',
              md: () => 'h-[30px] w-[60px]',
              lg: () => 'h-[34px] w-[68px]',
              xl: () => 'h-[38px] w-[76px]',
            })(lastScale),
            toIntentMatch({
              neutral: () => clsx('solid-neutral dark:solid-neutral2'),
              light: () => clsx('solid-light dark:solid-light2'),
              dark: () => clsx('solid-dark dark:solid-dark2'),
              primary: () => clsx('solid-primary dark:solid-primary2'),
              info: () => clsx('solid-info dark:solid-info2'),
              success: () => clsx('solid-success dark:solid-success2'),
              accent: () => clsx('solid-accent dark:solid-accent2'),
              warning: () => clsx('solid-warning dark:solid-warning2'),
              danger: () => clsx('solid-danger dark:solid-danger2'),
            })(lastIntent),
          )}
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
              {
                'opacity-80': disabled,
              },
              toScaleMatch({
                xs: () => clsx('h-[16px] w-[16px]', checked ? 'translate-x-[24px]' : 'translate-x-[2px]'),
                sm: () => clsx('h-[20px] w-[20px]', checked ? 'translate-x-[28px]' : 'translate-x-[2px]'),
                md: () => clsx('h-[24px] w-[24px]', checked ? 'translate-x-[32px]' : 'translate-x-[2px]'),
                lg: () => clsx('h-[28px] w-[28px]', checked ? 'translate-x-[36px]' : 'translate-x-[2px]'),
                xl: () => clsx('h-[32px] w-[32px]', checked ? 'translate-x-[40px]' : 'translate-x-[2px]'),
              })(lastScale),
            )}
          >
            {children}
          </span>
        </BaseSwitch>
      </BaseSwitch.Group>
    );
  },
);
