import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

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

const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ className, children, scale = 'md', intent = 'primary', outlined, ...rests }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...rests}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center justify-center',
          'rounded',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          toScaleMatch({
            xs: () => 'scale-text-xs scale-p-xs',
            sm: () => 'scale-text-sm scale-p-sm',
            md: () => 'scale-text-md scale-p-md',
            lg: () => 'scale-text-lg scale-p-lg',
            xl: () => 'scale-text-xl scale-p-xl',
          })(scale),
          toIntentMatch({
            neutral: () => clsx(outlined ? 'outlined-neutral outlined-focus-neutral' : 'solid-neutral'),
            light: () => clsx(outlined ? 'outlined-light outlined-focus-light' : 'solid-light'),
            dark: () => clsx(outlined ? 'outlined-dark outlined-focus-dark' : 'solid-dark'),
            primary: () => clsx(outlined ? 'outlined-primary outlined-focus-primary' : 'solid-primary'),
            info: () => clsx(outlined ? 'outlined-info outlined-focus-info' : 'solid-info'),
            success: () => clsx(outlined ? 'outlined-success outlined-focus-success' : 'solid-success'),
            accent: () => clsx(outlined ? 'outlined-accent outlined-focus-accent' : 'solid-accent'),
            warning: () => clsx(outlined ? 'outlined-warning outlined-focus-warning' : 'solid-warning'),
            danger: () => clsx(outlined ? 'outlined-danger outlined-focus-danger' : 'solid-danger'),
          })(intent),
        )}
      >
        {children}
      </button>
    );
  },
);

export { Button };
export default Button;
