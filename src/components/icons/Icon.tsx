import React from 'react';
import classnames from 'classnames';
import * as HeroIcon from '@heroicons/react/outline';

import { IntentType, IntentWeightType, RootScale, toHoverIntentColor, toIntentColor, toScaleMatch } from '@/system';

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

  /**
   * @default dark
   */
  intent?: IntentType;

  /**
   * @default 400
   */
  intentWeight?: IntentWeightType;
}

const Icon = React.forwardRef<Element, IconProps>(
  ({ className, scale = 'md', intent = 'light', intentWeight = 400, icon, ...rests }, ref) => {
    const Component = HeroIcon[icon];

    return (
      <div
        ref={ref}
        {...rests}
        className={classnames(
          CLASSNAME,
          className,
          'inline-block',
          toScaleMatch(() => 'w-4 h-4')(() => 'w-5 h-5')(() => 'w-6 h-6')(scale),
          toIntentColor({
            prefix: 'text',
            intent,
            intentWeight,
          }),
          toHoverIntentColor({
            prefix: 'text',
            intent,
            intentWeight: intentWeight - 100,
          }),
        )}
      >
        <Component />
      </div>
    );
  },
);

export { Icon };
export default Icon;
