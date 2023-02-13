import * as React from 'react';
import clsx from 'clsx';
import * as HeroIcon from '@heroicons/react/outline';

import { RootInherit, RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../system';
import { Box } from '../common';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface IconProps {
  /**
   * Icon name
   */
  icon: keyof typeof HeroIcon;

  /**
   * @default inherit
   */
  intent?: RootIntent | RootInherit;

  /**
   * Set this to change scale
   * @default inherit
   */
  scale?: RootScale;
}

const Icon = React.forwardRef<ElementType, IconProps & ElementProps>(
  ({ className, icon, intent = 'inherit', scale = 'md', ...rests }, ref) => {
    const Component = HeroIcon[icon];

    return (
      <Box
        {...rests}
        ref={ref}
        as="i"
        scaleClassName={toScaleMatch({
          xs: () => 'size-xs',
          sm: () => 'size-sm',
          md: () => 'size-md',
          lg: () => 'size-lg',
          xl: () => 'size-xl',
        })(scale)}
        intentClassName={toIntentMatch({
          default: () => 'text-default',
          neutral: () => 'text-neutral',
          light: () => 'text-light',
          dark: () => 'text-dark',
          primary: () => 'text-primary',
          info: () => 'text-info',
          success: () => 'text-success',
          warning: () => 'text-warning',
          danger: () => 'text-danger',
        })(intent)}
        className={clsx(CLASSNAME, className, 'inline-flex items-center justify-center')}
      >
        <Component className="w-full" />
      </Box>
    );
  },
);

export { Icon };
export default Icon;
