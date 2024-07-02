import { Switch as BaseSwitch } from '@headlessui/react';
import { RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch, toScaleMatch } from '~/system';

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
  intent?: RootIntentType;
  name?: string;
  onChange?: (checked: boolean) => void;
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
  value?: string;
}

export const Switch = React.forwardRef<ElementType, SwitchProps>(
  ({ className, children, intent = 'primary', scale = 'md', ...others }, ref) => {
    const { checked, disabled } = others;

    return (
      <BaseSwitch.Group>
        <BaseSwitch
          {...others}
          className={clsx(
            CLASSNAME,
            className,
            'relative',
            'inline-flex items-center shrink-0',
            'rounded-full shadow',
            'focus:outline-none focus-visible:ring-2',
            'transition-colors duration-200 ease-in-out',
            disabled ? 'opacity-95 cursor-not-allowed' : 'cursor-pointer',
            toScaleMatch({
              lg: () => 'h-[34px] w-[68px]',
              md: () => 'h-[30px] w-[60px]',
              sm: () => 'h-[26px] w-[52px]',
              xl: () => 'h-[38px] w-[76px]',
              xs: () => 'h-[22px] w-[44px]',
            })(scale),
            'border border-neutral-1 dark:border-neutral-9',
            {
              'bg-cream-1 dark:bg-space-3': !checked,
            },
            toIntentMatch({
              accent: () => {
                return clsx({
                  'bg-accent dark:bg-accent': checked,
                });
              },
              danger: () => {
                return clsx({
                  'bg-danger dark:bg-danger': checked,
                });
              },
              info: () => {
                return clsx({
                  'bg-info dark:bg-info': checked,
                });
              },
              neutral: () => {
                return clsx({
                  'bg-neutral dark:bg-neutral': checked,
                });
              },
              primary: () => {
                return clsx({
                  'bg-primary dark:bg-primary': checked,
                });
              },
              success: () => {
                return clsx({
                  'bg-success dark:bg-success': checked,
                });
              },
              warning: () => {
                return clsx({
                  'bg-warning dark:bg-warning': checked,
                });
              },
            })(intent),
          )}
          ref={ref as any}
        >
          <span
            className={clsx(
              'inline-flex justify-center items-center',
              checked ? 'bg-white dark:bg-white ' : 'bg-neutral-3 dark:neutral-3',
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
  },
);
