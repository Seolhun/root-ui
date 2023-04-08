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
  ({ className, children, intent = 'primary', ...others }, ref) => {
    return (
      <blockquote
        {...others}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'text-base font-light leading-snug',
          'text-neutral dark:text-neutral2',
          'mt-0 mb-4 pl-8',
          'border-l-4',
          toIntentMatch({
            neutral: () => clsx('border-neutral'),
            light: () => clsx('border-light'),
            dark: () => clsx('border-dark'),
            primary: () => clsx('border-primary'),
            info: () => clsx('border-info'),
            success: () => clsx('border-success'),
            accent: () => clsx('border-accent'),
            warning: () => clsx('border-warning'),
            danger: () => clsx('border-danger'),
          })(intent),
        )}
      >
        {children}
      </blockquote>
    );
  },
);
