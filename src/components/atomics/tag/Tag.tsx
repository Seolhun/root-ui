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
        role="button"
        tabIndex={0}
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
          'focus:outline-none focus:ring-1 focus:ring-offset-white focus:dark:ring-offset-space focus:ring-offset-1',
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

export { Tag };
export default Tag;
