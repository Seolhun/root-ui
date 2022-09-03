import React from 'react';
import classNames from 'classnames';
import * as HeroIcon from '@heroicons/react/outline';

import { RootScale, toScaleMatch } from '../../system';

const CLASSNAME = 'Root__Icon';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface IconProps extends ExtensionProps {
  icon: keyof typeof HeroIcon;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const Icon = React.forwardRef<Element, IconProps>(({ className, scale = 'md', icon, ...rests }, ref) => {
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
          sm: () => 'w-4 h-4',
          md: () => 'w-5 h-5',
          lg: () => 'w-6 h-6',
        })(scale),
      )}
    >
      <Component />
    </div>
  );
});

export { Icon };
export default Icon;
