import React from 'react';
import classnames from 'classnames';

import { IntentType, IntentWeightType, RootScale, toIntentColor, toScaleStyles } from '@/system';

const CLASSNAME = 'Root__Tag';
type Element = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface TagProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
  /**
   * @default primary
   */
  intent?: IntentType;
  /**
   * @default 500
   */
  intentWeight?: IntentWeightType;
}

const Tag: React.FC<TagProps> = ({
  className,
  children,
  scale = 'md',
  intent = 'primary',
  intentWeight = 200,
  ...rests
}) => {
  return (
    <span
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'inline-block',
        toScaleStyles(() => ['py-1 px-2'])(() => ['py-2 px-3'])(() => ['py-2.5 px-4'])(scale),
        'rounded-full',
        'text-xs font-semibold capitalize last:mr-0 mr-1',
        toIntentColor({
          prefix: 'bg',
          intent,
          intentWeight,
        }),
        toIntentColor({
          prefix: 'text',
          intent,
          intentWeight: 600,
        }),
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
