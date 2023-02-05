import * as React from 'react';
import clsx from 'clsx';
import * as HeroIcon from '@heroicons/react/outline';

import { RootInherit, RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../system';
import { Box } from '../common';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface IconProps extends ElementProps {
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

const Icon = React.forwardRef<ElementType, IconProps>(
  ({ className, icon, intent = 'inherit', scale = 'md', ...rests }, ref) => {
    const Component = HeroIcon[icon];

    return (
      <Box
        {...rests}
        ref={ref}
        as="i"
        scaleClassName={toScaleMatch({
          xs: () => 'w-8 h-8 min-w-8 min-h-8',
          sm: () => 'w-10 h-10 min-w-10 min-h-10',
          md: () => 'w-12 h-12 min-w-12 min-h-12',
          lg: () => 'w-14 h-14 min-w-14 min-h-14',
          xl: () => 'w-16 h-16 min-w-16 min-h-16',
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
