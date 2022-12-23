import React from 'react';
import classNames from 'classnames';

import { RootIntent, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__BlockQuote';
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;

export interface BlockQuoteProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ className, children, intent = 'primary', ...rests }) => {
  return (
    <blockquote
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed',
        'mt-0 mb-4 pl-2',
        'text-blockquote',
        'border-l-4',
        toIntentMatch({
          default: () => classNames('border-neutral'),
          neutral: () => classNames('border-neutral'),
          light: () => classNames('border-light'),
          dark: () => classNames('border-dark'),
          primary: () => classNames('border-primary'),
          info: () => classNames('border-info'),
          success: () => classNames('border-success'),
          warning: () => classNames('border-warning'),
          danger: () => classNames('border-danger'),
        })(intent),
      )}
    >
      {children}
    </blockquote>
  );
};

export { BlockQuote };
export default BlockQuote;
