import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ButtonProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Use outline style
   */
  outlined?: boolean;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ className, children, intent = 'primary', outlined, scale = 'md', ...others }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'btn',
          `btn-scale-${scale}`,
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
        {children}
      </button>
    );
  },
);
