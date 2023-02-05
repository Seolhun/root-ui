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
}

const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ className, children, scale = 'md', intent = 'primary', ...rests }, ref) => {
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
          'inline-block',
          'rounded-md',
          'focus:outline-none focus:ring-1 focus:ring-offset-white focus:dark:ring-offset-space focus:ring-offset-1',
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
          default: () => 'solid-default dark:solid-default focus:ring-default',
          neutral: () => 'solid-neutral dark:solid-neutral focus:ring-neutral',
          light: () => 'solid-light dark:solid-light focus:ring-light',
          dark: () => 'solid-dark dark:solid-dark focus:ring-dark',
          primary: () => 'solid-primary dark:solid-primary focus:ring-primary',
          info: () => 'solid-info dark:solid-info focus:ring-info',
          success: () => 'solid-success dark:solid-success focus:ring-success',
          warning: () => 'solid-warning dark:solid-warning focus:ring-warning',
          danger: () => 'solid-danger dark:solid-danger focus:ring-danger',
        })(intent)}
      >
        {children}
      </Box>
    );
  },
);

export { Button };
export default Button;
