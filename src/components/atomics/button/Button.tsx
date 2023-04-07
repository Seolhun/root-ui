import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '~/system';

const CLASSNAME = 'Root__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ButtonProps extends ElementProps {
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
   * Use outline style
   */
  outlined?: boolean;
}

export const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ className, children, scale = 'md', intent = 'primary', outlined, ...others }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...others}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center justify-center',
          'rounded',
          'disabled:cursor-not-allowed',
          toScaleMatch({
            xs: () => 'scale-text-xs scale-p-xs',
            sm: () => 'scale-text-sm scale-p-sm',
            md: () => 'scale-text-md scale-p-md',
            lg: () => 'scale-text-lg scale-p-lg',
            xl: () => 'scale-text-xl scale-p-xl',
          })(scale),
          toIntentMatch({
            neutral: () => {
              return clsx(outlined ? 'outlined-neutral dark:outlined-neutral2' : 'solid-neutral dark:solid-neutral');
            },
            light: () => {
              return clsx(outlined ? 'outlined-light dark:outlined-light2' : 'solid-light dark:solid-light');
            },
            dark: () => {
              return clsx(outlined ? 'outlined-dark dark:outlined-dark2' : 'solid-dark dark:solid-dark');
            },
            primary: () => {
              return clsx(outlined ? 'outlined-primary dark:outlined-primary2' : 'solid-primary dark:solid-primary');
            },
            info: () => {
              return clsx(outlined ? 'outlined-info dark:outlined-info2' : 'solid-info dark:solid-info');
            },
            success: () => {
              return clsx(outlined ? 'outlined-success dark:outlined-success2' : 'solid-success dark:solid-success');
            },
            accent: () => {
              return clsx(outlined ? 'outlined-accent dark:outlined-accent2' : 'solid-accent dark:solid-accent');
            },
            warning: () => {
              return clsx(outlined ? 'outlined-warning dark:outlined-warning2' : 'solid-warning dark:solid-warning');
            },
            danger: () => {
              return clsx(outlined ? 'outlined-danger dark:outlined-danger2' : 'solid-danger dark:solid-danger');
            },
          })(intent),
        )}
      >
        {children}
      </button>
    );
  },
);
