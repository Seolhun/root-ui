import React from 'react';
import classnames from 'classnames';

import { IntentType, IntentWeightType, RootScale, toIntentColor, toScaleMatch, toTypography } from '@/system';

const CLASSNAME = 'Root__Tag';
type Element = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TagProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default sm
   */
  scale?: RootScale;
  /**
   * @default primary
   */
  intent?: IntentType;
  /**
   * @default 600
   */
  intentWeight?: IntentWeightType;
}

const Tag: React.FC<TagProps> = ({
  className,
  children,
  scale = 'sm',
  intent = 'primary',
  intentWeight = 600,
  ...rests
}) => {
  return (
    <span
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'inline-block',
        'font-semibold capitalize',
        toScaleMatch(() => [toTypography('2.5')])(() => [toTypography('3')])(() => [toTypography('3.5')])(scale),
        toScaleMatch(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-3.5'])(scale),
        'rounded-full',
        'last:mr-0 mr-1',
        toIntentColor({
          prefix: 'text',
          intent,
          intentWeight,
        }),
        toIntentColor({
          prefix: 'bg',
          intent,
          intentWeight: 200,
        }),
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
