import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, toIntentMatch } from '~/system';

const CLASSNAME = 'Root__BlockQuote';
type ElementType = HTMLQuoteElement;
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;

export interface BlockQuoteProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const BlockQuote = React.forwardRef<ElementType, BlockQuoteProps>(
  ({ children, className, intent = 'primary', ...others }, ref) => {
    return (
      <blockquote
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'text-base font-light leading-snug',
          'text-neutral dark:text-neutral2',
          'mt-0 mb-4 pl-8',
          'border-l-4',
          toIntentMatch({
            accent: () => clsx('border-accent'),
            danger: () => clsx('border-danger'),
            dark: () => clsx('border-dark'),
            info: () => clsx('border-info'),
            light: () => clsx('border-light'),
            neutral: () => clsx('border-neutral'),
            primary: () => clsx('border-primary'),
            success: () => clsx('border-success'),
            warning: () => clsx('border-warning'),
          })(intent),
        )}
        ref={ref}
      >
        {children}
      </blockquote>
    );
  },
);
