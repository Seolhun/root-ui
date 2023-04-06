import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, toIntentMatch } from '~/system';

const CLASSNAME = 'Root__BlockQuote';
type ElementType = HTMLQuoteElement;
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;

export interface BlockQuoteProps {
  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const BlockQuote = React.forwardRef<ElementType, ElementProps & BlockQuoteProps>(
  ({ className, children, intent = 'primary', ...rests }, ref) => {
    return (
      <blockquote
        {...rests}
        ref={ref}
        className={clsx(
          CLASSNAME,
          className,
          'text-base font-light leading-snug',
          'text-neutral dark:text-neutral2',
          'mt-0 mb-4 pl-2',
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
