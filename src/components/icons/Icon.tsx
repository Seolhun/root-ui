import React from 'react';
import classNames from 'classnames';
import * as HeroIcon from '@heroicons/react/outline';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../system';
import { Box } from '../common';

const CLASSNAME = 'Root__Icon';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface IconProps extends ExtensionProps {
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

const Icon = React.forwardRef<Element, IconProps>(
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
          default: () => classNames('text-default'),
          neutral: () => classNames('text-neutral'),
          light: () => classNames('text-light'),
          dark: () => classNames('text-dark'),
          primary: () => classNames('text-primary'),
          info: () => classNames('text-info'),
          success: () => classNames('text-success'),
          warning: () => classNames('text-warning'),
          danger: () => classNames('text-danger'),
        })(intent)}
        className={classNames(CLASSNAME, className, 'inline-block')}
      >
        <Component />
      </Box>
    );
  },
);

export { Icon };
export default Icon;
