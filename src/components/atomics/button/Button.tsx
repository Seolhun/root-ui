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
        type="button"
        {...rests}
        ref={ref}
        as="button"
        scaleClassName={toScaleMatch({
          xs: () => 'text-2.5 py-1 px-2',
          sm: () => 'text-2.5 py-1.5 px-2.5',
          md: () => 'text-3 py-1.5 px-3',
          lg: () => 'text-3 py-2 px-3.5',
          xl: () => 'text-4 py-2 px-4',
        })(scale)}
        intentClassName={toIntentMatch({
          default: () => {
            return clsx(
              'bg-default hover:bg-default-6 text-default-1',
              'dark:bg-default dark:hover:bg-default-6 dark:text-default-1',
              'focus:ring-offset-default',
            );
          },
          neutral: () => {
            return clsx(
              'bg-neutral hover:bg-neutral-6 text-neutral-1',
              'dark:bg-neutral dark:hover:bg-neutral-6 dark:text-neutral-1',
              'focus:ring-offset-neutral',
            );
          },
          light: () => {
            return clsx(
              'bg-light hover:bg-light-6 text-light-1',
              'dark:bg-light dark:hover:bg-light-6 dark:text-light-1',
              'focus:ring-offset-light',
            );
          },
          dark: () => {
            return clsx(
              'bg-dark hover:bg-dark-6 text-dark-1',
              'dark:bg-dark dark:hover:bg-dark-6 dark:text-dark-1',
              'focus:ring-offset-dark',
            );
          },
          primary: () => {
            return clsx(
              'bg-primary hover:bg-primary-6 text-primary-1',
              'dark:bg-primary dark:hover:bg-primary-6 dark:text-primary-1',
              'focus:ring-offset-primary',
            );
          },
          info: () =>
            clsx(
              'bg-info hover:bg-info-6 text-info-1',
              'dark:bg-info dark:hover:bg-info-6 dark:text-info-1',
              'focus:ring-offset-info',
            ),
          success: () => {
            return clsx(
              'bg-success hover:bg-success-6 text-success-1',
              'dark:bg-success dark:hover:bg-success-6 dark:text-success-1',
              'focus:ring-offset-success',
            );
          },
          warning: () => {
            return clsx(
              'bg-warning hover:bg-warning-6 text-warning-1',
              'dark:bg-warning dark:hover:bg-warning-6 dark:text-warning-1',
              'focus:ring-offset-warning',
            );
          },
          danger: () => {
            return clsx(
              'bg-danger hover:bg-danger-6 text-danger-1',
              'dark:bg-danger dark:hover:bg-danger-6 dark:text-danger-1',
              'focus:ring-offset-danger',
            );
          },
        })(intent)}
        className={clsx(
          CLASSNAME,
          className,
          'inline-block',
          'text-white',
          'rounded-md',
          `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`,
          'placeholder:text-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        )}
      >
        {children}
      </Box>
    );
  },
);

export { Button };
export default Button;
