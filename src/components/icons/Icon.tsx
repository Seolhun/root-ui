import * as React from 'react';
import clsx from 'clsx';
import * as HeroIcon from '@heroicons/react/outline';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../system';
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
   * @default dark
   */
  intent?: RootIntent;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const Icon = React.forwardRef<ElementType, IconProps>(
  ({ className, icon, intent = 'dark', scale = 'md', ...rests }, ref) => {
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
          default: () => clsx('text-default'),
          neutral: () => clsx('text-neutral'),
          light: () => clsx('text-light'),
          dark: () => clsx('text-dark'),
          primary: () => clsx('text-primary'),
          info: () => clsx('text-info'),
          success: () => clsx('text-success'),
          warning: () => clsx('text-warning'),
          danger: () => clsx('text-danger'),
        })(intent)}
        className={clsx(CLASSNAME, className, 'inline-block')}
      >
        <Component />
      </Box>
    );
  },
);

export { Icon };
export default Icon;
