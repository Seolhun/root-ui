import React from 'react';
import classnames from 'classnames';

import { IntentType, RootScale } from '@/system';
import { toIntentColorBy } from '@/utils';

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
}

const Tag: React.FC<TagProps> = ({ className, children, intent = 'primary', scale = 'md', ...rests }) => {
  return (
    <span
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'inline-block',
        {
          'py-1 px-2': scale === 'sm',
          'py-1.5 px-3': scale === 'md',
          'py-2 px-4': scale === 'lg',
        },
        'rounded-full',
        'text-xs font-semibold capitalize last:mr-0 mr-1',
        toIntentColorBy(intent, 600, 'text'),
        toIntentColorBy(intent, 200, 'bg'),
      )}
    >
      {children}
    </span>
  );
};

export { Tag };
export default Tag;
