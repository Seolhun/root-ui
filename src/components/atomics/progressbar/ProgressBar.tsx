import React from 'react';
import clsx from 'clsx';

import { RootIntent } from '../../../system';

const CLASSNAME = 'Root__ProgressBar';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ProgressBarProps extends ElementProps {
  /**
   * Percentage
   * @default 0
   */
  progress?: number;

  /**
   * Badge
   */
  badge?: React.ReactNode;

  /**
   * Progressbar UI Type
   */
  simple?: boolean;

  /**
   * Color Intent
   */
  intent?: RootIntent;
}

const ProgressBar = React.forwardRef<ElementType, ProgressBarProps>(
  ({ className, badge, progress = 0, simple = false, intent = 'primary', ...rests }: ProgressBarProps) => {
    return (
      <div {...rests} className={clsx(CLASSNAME, className)}>
        <div className="relative">
          <div className="flex mb-2 items-center justify-between">
            {badge && (
              <div>
                <span
                  className={clsx(
                    'inline-block',
                    'py-1 px-2',
                    `text-xs text-${intent}-600 font-semibold`,
                    `bg-${intent}-200`,
                    'rounded-full',
                  )}
                >
                  {badge}
                </span>
              </div>
            )}
            {!simple && (
              <div className="text-right">
                <span className={clsx('inline-block', `text-xs text-${intent}-600 font-semibold`)}>
                  {`${progress}%`}
                </span>
              </div>
            )}
          </div>
          <div className={clsx('flex', 'h-2 mb-4', `bg-${intent}-200`, 'text-xs', 'rounded', 'overflow-hidden')}>
            <div
              className={clsx(
                'flex flex-col justify-center',
                'text-center whitespace-nowrap',
                'shadow-none',
                'text-white',
                `bg-${intent}-500`,
                'transition-all',
              )}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    );
  },
);

export { ProgressBar };
export default ProgressBar;
