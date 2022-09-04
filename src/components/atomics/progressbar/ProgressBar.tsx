import React from 'react';
import classNames from 'classnames';

import { RootIntent } from '../../../system';

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
  intent?: RootIntent;
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
    <div {...rests} className={classNames(CLASSNAME, className)}>
      <div className="relative">
        <div className="flex mb-2 items-center justify-between">
          {badge && (
            <div>
              <span
                className={classNames(
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
              <span className={classNames('inline-block', `text-xs text-${intent}-600 font-semibold`)}>
                {`${progress}%`}
              </span>
            </div>
          )}
        </div>
        <div className={classNames('flex', 'h-2 mb-4', `bg-${intent}-200`, 'text-xs', 'rounded', 'overflow-hidden')}>
          <div
            className={classNames(
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
