import React from 'react';
import classnames from 'classnames';

import { IntentWeightType, IntentType, toIntentColor } from '@/system';

const CLASSNAME = 'Root__BlockQuote';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export interface BlockQuoteProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 300
   */
  intentWeight?: IntentWeightType;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({
  className,
  children,
  intent = 'primary',
  intentWeight = 300,
  ...rests
}) => {
  return (
    <blockquote
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed mt-0 mb-4',
        'border-l-4 pl-2',
        toIntentColor({
          prefix: 'border',
          intent,
          intentWeight,
        }),
      )}
    >
      {children}
    </blockquote>
  );
};

export { BlockQuote };
export default BlockQuote;
