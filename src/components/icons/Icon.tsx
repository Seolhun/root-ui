import React from 'react';
import classNames from 'classnames';
import * as HeroIcon from '@heroicons/react/outline';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../system';

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
      <div
        ref={ref}
        {...rests}
        className={classNames(
          CLASSNAME,
          className,
          'inline-block',
          toScaleMatch({
            xs: () => 'w-8 h-8 min-w-8 min-h-8',
            sm: () => 'w-12 h-12 min-w-12 min-h-12',
            md: () => 'w-16 h-16 min-w-16 min-h-16',
            lg: () => 'w-20 h-20 min-w-20 min-h-20',
            xl: () => 'w-24 h-24 min-w-24 min-h-24',
          })(scale),
          toIntentMatch({
            neutral: () => classNames('text-neutral'),
            light: () => classNames('text-light'),
            dark: () => classNames('text-dark'),
            primary: () => classNames('text-primary'),
            info: () => classNames('text-info'),
            success: () => classNames('text-success'),
            warning: () => classNames('text-warning'),
            danger: () => classNames('text-danger'),
          })(intent),
        )}
      >
        <Component />
      </div>
    );
  },
);

export { Icon };
export default Icon;
