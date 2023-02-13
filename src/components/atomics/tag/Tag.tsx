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

  /**
   * Use outline style
   */
  outlined?: boolean;
}

const Tag = React.forwardRef<ElementType, TagProps>(
  ({ className, children, scale = 'md', intent = 'primary', outlined, ...rests }, ref) => {
    return (
      <Box
        role="button"
        tabIndex={0}
        {...rests}
        ref={ref}
        as="span"
        className={clsx(CLASSNAME, className, 'flex items-center justify-center', 'rounded-full', 'cursor-pointer')}
        scaleClassName={toScaleMatch({
          xs: () => 'text-2.5 size-p-xs',
          sm: () => 'text-2.5 size-p-sm',
          md: () => 'text-3 size-p-md',
          lg: () => 'text-3 size-p-lg',
          xl: () => 'text-4 size-p-xl',
        })(scale)}
        intentClassName={toIntentMatch({
          default: () => clsx(outlined ? 'outlined-default' : 'solid-default'),
          neutral: () => clsx(outlined ? 'outlined-neutral' : 'solid-neutral'),
          light: () => clsx(outlined ? 'outlined-light' : 'solid-light'),
          dark: () => clsx(outlined ? 'outlined-dark' : 'solid-dark'),
          primary: () => clsx(outlined ? 'outlined-primary' : 'solid-primary'),
          info: () => clsx(outlined ? 'outlined-info' : 'solid-info'),
          success: () => clsx(outlined ? 'outlined-success' : 'solid-success'),
          warning: () => clsx(outlined ? 'outlined-warning' : 'solid-warning'),
          danger: () => clsx(outlined ? 'outlined-danger' : 'solid-danger'),
        })(intent)}
      >
        {children}
      </Box>
    );
  },
);

export { Tag };
export default Tag;
