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
              return clsx(outlined ? 'outlined-accent dark:outlined-accent' : 'solid-accent dark:solid-accent');
            },
            danger: () => {
              return clsx(outlined ? 'outlined-danger dark:outlined-danger' : 'solid-danger dark:solid-danger');
            },
            info: () => {
              return clsx(outlined ? 'outlined-info dark:outlined-info' : 'solid-info dark:solid-info');
            },
            neutral: () => {
              return clsx(outlined ? 'outlined-neutral dark:outlined-neutral' : 'solid-neutral dark:solid-neutral');
            },
            primary: () => {
              return clsx(outlined ? 'outlined-primary dark:outlined-primary' : 'solid-primary dark:solid-primary');
            },
            success: () => {
              return clsx(outlined ? 'outlined-success dark:outlined-success' : 'solid-success dark:solid-success');
            },
            warning: () => {
              return clsx(outlined ? 'outlined-warning dark:outlined-warning' : 'solid-warning dark:solid-warning');
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
