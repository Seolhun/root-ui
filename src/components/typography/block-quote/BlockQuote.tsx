import React from 'react';
import classNames from 'classnames';

import { RootIntentWeight, RootIntent } from '../../../system';

const CLASSNAME = 'Root__BlockQuote';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export interface BlockQuoteProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * @default 300
   */
  intentWeight?: RootIntentWeight;
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
      className={classNames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed',
        'mt-0 mb-4 pl-2',
        'text-blockquote',
        `border-l-4 border-${intent}-${intentWeight}`,
      )}
    >
      {children}
    </blockquote>
  );
};

export { BlockQuote };
export default BlockQuote;
