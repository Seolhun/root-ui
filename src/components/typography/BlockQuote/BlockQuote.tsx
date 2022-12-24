import React from 'react';
import classNames from 'classnames';

import { RootIntent, toIntentMatch } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__BlockQuote';
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;

export interface BlockQuoteProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

const BlockQuote = ({ className, children, intent = 'primary', ...rests }: BlockQuoteProps) => {
  return (
    <Box
      {...rests}
      as="blockquote"
      intentClassName={toIntentMatch({
        default: () => classNames('border-default'),
        neutral: () => classNames('border-neutral'),
        light: () => classNames('border-light'),
        dark: () => classNames('border-dark'),
        primary: () => classNames('border-primary'),
        info: () => classNames('border-info'),
        success: () => classNames('border-success'),
        warning: () => classNames('border-warning'),
        danger: () => classNames('border-danger'),
      })(intent)}
      className={classNames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed',
        'text-dark-9 dark:text-light-1',
        'mt-0 mb-4 pl-2',
        'border-l-4',
      )}
    >
      {children}
    </Box>
  );
};

export { BlockQuote };
export default BlockQuote;
