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

export { Tag };
export default Tag;
