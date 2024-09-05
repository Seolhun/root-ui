import { RootIntentType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch } from '~/system';

const CLASSNAME = 'Root__Divider';
type ElementType = HTMLHRElement;
type ElementProps = React.HTMLAttributes<ElementType>;

type DividerDirection = 'horizontal' | 'vertical';

export interface DividerProps extends ElementProps {
  /**
   * Direction
   * @default "horizontal"
   */
  direction?: DividerDirection;

  /**
   * Root intent
   * @default "neutral"
   */
  intent?: RootIntentType;
}

export const Divider = React.forwardRef<ElementType, DividerProps>(
  ({ children, className, direction = 'horizontal', intent = 'neutral', ...others }, ref) => {
    return (
      <hr
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          {
            'h-px w-full my-6': direction === 'horizontal',
            'w-px mx-6': direction === 'vertical',
          },
          toIntentMatch(
            {
              accent: () => 'bg-accent-2',
              danger: () => 'bg-danger-2',
              info: () => 'bg-info-2',
              neutral: () => 'bg-neutral-2',
              primary: () => 'bg-primary-2',
              success: () => 'bg-success-2',
              warning: () => 'bg-warning-2',
            },
            intent,
          ),
        )}
        ref={ref}
      />
    );
  },
);
