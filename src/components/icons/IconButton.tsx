import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '~/system';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface IconButtonProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * Outlined icons
   * @default outline
   */
  variant?: 'outline' | 'solid';
}

export const IconButton = React.forwardRef<ElementType, IconButtonProps>(
  ({ children, className, variant = 'outline', ...others }, ref) => {
    const { intent, scale } = useRootUI({
      defaultIntent: 'primary',
      defaultScale: 'md',
      intent: others?.intent,
      scale: others?.scale,
    });

    const outlined = variant === 'outline';
    return (
      <button
        type="button"
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center justify-center',
          'p-3 rounded-full',
          toIntentMatch({
            accent: () => {
              return clsx(outlined ? 'outlined-accent dark:outlined-accent2' : 'solid-accent dark:solid-accent2');
            },
            danger: () => {
              return clsx(outlined ? 'outlined-danger dark:outlined-danger2' : 'solid-danger dark:solid-danger2');
            },
            dark: () => {
              return clsx(outlined ? 'outlined-dark dark:outlined-dark2' : 'solid-dark dark:solid-dark2');
            },
            info: () => {
              return clsx(outlined ? 'outlined-info dark:outlined-info2' : 'solid-info dark:solid-info2');
            },
            light: () => {
              return clsx(outlined ? 'outlined-light dark:outlined-light2' : 'solid-light dark:solid-light2');
            },
            neutral: () => {
              return clsx(outlined ? 'outlined-neutral dark:outlined-neutral2' : 'solid-neutral dark:solid-neutral2');
            },
            primary: () => {
              return clsx(outlined ? 'outlined-primary dark:outlined-primary2' : 'solid-primary dark:solid-primary2');
            },
            success: () => {
              return clsx(outlined ? 'outlined-success dark:outlined-success2' : 'solid-success dark:solid-success2');
            },
            warning: () => {
              return clsx(outlined ? 'outlined-warning dark:outlined-warning2' : 'solid-warning dark:solid-warning2');
            },
          })(intent),
        )}
        ref={ref}
      >
        <div
          className={clsx(
            toScaleMatch({
              lg: () => 'scale-lg',
              md: () => 'scale-md',
              sm: () => 'scale-sm',
              xl: () => 'scale-xl',
              xs: () => 'scale-xs',
            })(scale),
          )}
        >
          {children}
        </div>
      </button>
    );
  },
);
