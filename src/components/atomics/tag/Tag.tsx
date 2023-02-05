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
        className={clsx(CLASSNAME, className, 'inline-block', 'rounded-full', 'cursor-pointer')}
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

export { Tag };
export default Tag;
