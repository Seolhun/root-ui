import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch, useRootUI } from '~/system';

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
  ({ className, children, outlined, ...others }, ref) => {
    const { scale, intent } = useRootUI({
      intent: others?.intent,
      defaultIntent: 'primary',
      scale: others?.scale,
      defaultScale: 'md',
    });

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
              return clsx(outlined ? 'outlined-neutral dark:outlined-neutral2' : 'solid-neutral dark:solid-neutral2');
            },
            light: () => {
              return clsx(outlined ? 'outlined-light dark:outlined-light2' : 'solid-light dark:solid-light2');
            },
            dark: () => {
              return clsx(outlined ? 'outlined-dark dark:outlined-dark2' : 'solid-dark dark:solid-dark2');
            },
            primary: () => {
              return clsx(outlined ? 'outlined-primary dark:outlined-primary2' : 'solid-primary dark:solid-primary2');
            },
            info: () => {
              return clsx(outlined ? 'outlined-info dark:outlined-info2' : 'solid-info dark:solid-info2');
            },
            success: () => {
              return clsx(outlined ? 'outlined-success dark:outlined-success2' : 'solid-success dark:solid-success2');
            },
            accent: () => {
              return clsx(outlined ? 'outlined-accent dark:outlined-accent2' : 'solid-accent dark:solid-accent2');
            },
            warning: () => {
              return clsx(outlined ? 'outlined-warning dark:outlined-warning2' : 'solid-warning dark:solid-warning2');
            },
            danger: () => {
              return clsx(outlined ? 'outlined-danger dark:outlined-danger2' : 'solid-danger dark:solid-danger2');
            },
          })(intent),
        )}
      >
        {children}
      </button>
    );
  },
);
