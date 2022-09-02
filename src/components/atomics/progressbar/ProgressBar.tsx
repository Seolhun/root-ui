import React from 'react';
import classnames from 'classnames';

import { IntentType } from '@/system';

const CLASSNAME = 'Root__ProgressBar';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface ProgressBarProps extends ExtensionProps {
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
  intent?: IntentType;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className,
  badge,
  progress = 0,
  simple = false,
  intent = 'primary',
  ...rests
}) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      <div className="relative">
        <div className="flex mb-2 items-center justify-between">
          {badge && (
            <div>
              <span
                className={classnames(
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
              <span className={classnames('inline-block', `text-xs text-${intent}-600 font-semibold`)}>
                {`${progress}%`}
              </span>
            </div>
          )}
        </div>
        <div className={classnames('flex', 'h-2 mb-4', `bg-${intent}-200`, 'text-xs', 'rounded', 'overflow-hidden')}>
          <div
            className={classnames(
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
};

export { ProgressBar };
export default ProgressBar;
