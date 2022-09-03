import React from 'react';
import classnames from 'classnames';

import { RootIntentType, RootIntentWeightType, RootScale, toScaleMatch } from '../../../system';

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
  intent?: RootIntentType;
  /**
   * @default 600
   */
  intentWeight?: RootIntentWeightType;
}

const Tag: React.FC<TagProps> = ({
  className,
  children,
  scale = 'md',
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
        toScaleMatch({
          sm: () => 'text-2.5',
          md: () => 'text-3',
          lg: () => 'text-3.5',
        })(scale),
        toScaleMatch({
          sm: () => 'py-1 px-2',
          md: () => 'py-1 px-2.5',
          lg: () => 'py-1 px-3',
        })(scale),
        `bg-${intent}-300 text-${intent}-${intentWeight}`,
        'rounded-full',
        'last:mr-0 mr-1',
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
