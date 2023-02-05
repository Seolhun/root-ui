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
          xs: () => 'text-2.5 py-1 px-2',
          sm: () => 'text-2.5 py-1.5 px-2.5',
          md: () => 'text-3 py-1.5 px-3',
          lg: () => 'text-3 py-2 px-3.5',
          xl: () => 'text-4 py-2 px-4',
        })(scale)}
        intentClassName={toIntentMatch({
          default: () => clsx(outlined ? 'outline-default' : 'solid-default'),
          neutral: () => clsx(outlined ? 'outline-neutral' : 'solid-neutral'),
          light: () => clsx(outlined ? 'outline-light' : 'solid-light'),
          dark: () => clsx(outlined ? 'outline-dark' : 'solid-dark'),
          primary: () => clsx(outlined ? 'outline-primary' : 'solid-primary'),
          info: () => clsx(outlined ? 'outline-info' : 'solid-info'),
          success: () => clsx(outlined ? 'outline-success' : 'solid-success'),
          warning: () => clsx(outlined ? 'outline-warning' : 'solid-warning'),
          danger: () => clsx(outlined ? 'outline-danger' : 'solid-danger'),
        })(intent)}
      >
        {children}
      </Box>
    );
  },
);

export { Button };
export default Button;
