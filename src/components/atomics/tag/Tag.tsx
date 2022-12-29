import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';
import { Box } from '../../common/box';

const CLASSNAME = 'Root__Tag';
type ElementType = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TagProps extends ElementProps {
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

const Tag = React.forwardRef<ElementType, TagProps>(
  ({ className, children, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <Box
        {...rests}
        ref={ref}
        as="span"
        className={clsx(
          CLASSNAME,
          className,
          'inline-block',
          'font-semibold',
          'border',
          'rounded-full',
          'cursor-pointer',
        )}
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
              'bg-white hover:bg-default-1 text-default',
              'border-default-3 hover:border-default-2',
              'dark:bg-default-8 dark:hover:bg-default-7 dark:text-default-1',
              'dark:border-default dark:hover:border-default-4',
              'focus:ring-offset-default',
            );
          },
          neutral: () => {
            return clsx(
              'bg-neutral hover:bg-neutral-6 text-neutral-1',
              'border-neutral hover:border-neutral-6',
              'dark:bg-neutral-6 dark:hover:bg-neutral dark:text-neutral-1',
              'dark:border-neutral dark:hover:border-neutral-4',
              'focus:ring-offset-neutral',
            );
          },
          light: () => {
            return clsx(
              'bg-light hover:bg-light-6 text-light-1',
              'border-light hover:border-light-6',
              'dark:bg-light-6 dark:hover:bg-light dark:text-light-1',
              'dark:border-light dark:hover:border-light-4',
              'focus:ring-offset-light',
            );
          },
          dark: () => {
            return clsx(
              'bg-dark hover:bg-dark-6 text-dark-1',
              'border-dark hover:border-dark-6',
              'dark:bg-dark-6 dark:hover:bg-dark dark:text-dark-1',
              'dark:border-dark dark:hover:border-dark-4',
              'focus:ring-offset-dark',
            );
          },
          primary: () => {
            return clsx(
              'bg-primary hover:bg-primary-6 text-primary-1',
              'border-primary hover:border-primary-6',
              'dark:bg-primary-6 dark:hover:bg-primary dark:text-primary-1',
              'dark:border-primary dark:hover:border-primary-4',
              'focus:ring-offset-primary',
            );
          },
          info: () => {
            return clsx(
              'bg-info hover:bg-info-6 text-info-1',
              'border-info hover:border-info-6',
              'dark:bg-info-6 dark:hover:bg-info dark:text-info-1',
              'dark:border-info dark:hover:border-info-4',
              'focus:ring-offset-info',
            );
          },
          success: () => {
            return clsx(
              'bg-success hover:bg-success-6 text-success-1',
              'border-success hover:border-success-6',
              'dark:bg-success-6 dark:hover:bg-success dark:text-success-1',
              'dark:border-success dark:hover:border-success-4',
              'focus:ring-offset-success',
            );
          },
          warning: () => {
            return clsx(
              'bg-warning hover:bg-warning-6 text-warning-1',
              'border-warning hover:border-warning-6',
              'dark:bg-warning-6 dark:hover:bg-warning dark:text-warning-1',
              'dark:border-warning dark:hover:border-warning-4',
              'focus:ring-offset-warning',
            );
          },
          danger: () => {
            return clsx(
              'bg-danger hover:bg-danger-6 text-danger-1',
              'border-danger hover:border-danger-6',
              'dark:bg-danger-6 dark:hover:bg-danger dark:text-danger-1',
              'dark:border-danger dark:hover:border-danger-4',
              'focus:ring-offset-danger',
            );
          },
        })(intent)}
      >
        {children}
      </Box>
    );
  },
);

export { Tag };
export default Tag;
