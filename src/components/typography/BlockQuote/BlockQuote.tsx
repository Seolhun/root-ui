import React from 'react';
import clsx from 'clsx';

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
        default: () => clsx('border-default'),
        neutral: () => clsx('border-neutral'),
        light: () => clsx('border-light'),
        dark: () => clsx('border-dark'),
        primary: () => clsx('border-primary'),
        info: () => clsx('border-info'),
        success: () => clsx('border-success'),
        warning: () => clsx('border-warning'),
        danger: () => clsx('border-danger'),
      })(intent)}
      className={clsx(
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
