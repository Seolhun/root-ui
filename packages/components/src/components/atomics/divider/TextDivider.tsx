import { RootIntentType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__TextDivider';
type ElementType = HTMLHRElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TextDividerProps extends ElementProps {
  /**
   * Root intent
   * @default "neutral"
   */
  intent?: RootIntentType;
}

export const TextDivider = React.forwardRef<ElementType, TextDividerProps>(
  ({ children, className, intent = 'neutral', ...others }, ref) => {
    return (
      <div className={clsx(CLASSNAME, className, 'flex items-center', 'whitespace-pre-wrap')} {...others} ref={ref}>
        <span className="h-[1px] flex-grow bg-neutral-2 mx-4"></span>
        {children}
        <span className="h-[1px] flex-grow bg-neutral-2 mx-4"></span>
      </div>
    );
  },
);
