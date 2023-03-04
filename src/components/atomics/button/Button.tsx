import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { Box } from '../../common/box';

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
      <Box
        role="button"
        tabIndex={0}
        {...rests}
        ref={ref}
        as="button"
        className={clsx(
          CLASSNAME,
          className,
          'flex items-center justify-center',
          'rounded-md',
          'placeholder:text-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
        scaleClassName={toScaleMatch({
          xs: () => 'scale-text-xs scale-p-xs',
          sm: () => 'scale-text-sm scale-p-sm',
          md: () => 'scale-text-md scale-p-md',
          lg: () => 'scale-text-lg scale-p-lg',
          xl: () => 'scale-text-xl scale-p-xl',
        })(scale)}
        intentClassName={toIntentMatch({
          neutral: () => clsx(outlined ? 'outlined-neutral' : 'solid-neutral'),
          light: () => clsx(outlined ? 'outlined-light' : 'solid-light'),
          dark: () => clsx(outlined ? 'outlined-dark' : 'solid-dark'),
          primary: () => clsx(outlined ? 'outlined-primary' : 'solid-primary'),
          info: () => clsx(outlined ? 'outlined-info' : 'solid-info'),
          success: () => clsx(outlined ? 'outlined-success' : 'solid-success'),
          accent: () => clsx(outlined ? 'outlined-accent' : 'solid-accent'),
          warning: () => clsx(outlined ? 'outlined-warning' : 'solid-warning'),
          danger: () => clsx(outlined ? 'outlined-danger' : 'solid-danger'),
        })(intent)}
      >
        {children}
      </Box>
    );
  },
);

export { Button };
export default Button;
