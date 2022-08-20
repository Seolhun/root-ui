import React from 'react';
import classnames from 'classnames';

import { IntentType, toIntentColor } from '@/system';

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
                  'text-xs font-semibold rounded-full',
                  toIntentColor({
                    prefix: 'text',
                    intent,
                    intentWeight: 600,
                  }),
                  toIntentColor({
                    prefix: 'bg',
                    intent,
                    intentWeight: 200,
                  }),
                )}
              >
                {badge}
              </span>
            </div>
          )}
          {!simple && (
            <div className="text-right">
              <span
                className={classnames(
                  'inline-block',
                  'text-xs font-semibold',
                  toIntentColor({
                    prefix: 'text',
                    intent,
                    intentWeight: 600,
                  }),
                )}
              >
                {`${progress}%`}
              </span>
            </div>
          )}
        </div>
        <div
          className={classnames(
            'flex',
            'h-2 mb-4',
            'text-xs rounded',
            'overflow-hidden',
            toIntentColor({
              prefix: 'bg',
              intent,
              intentWeight: 200,
            }),
          )}
        >
          <div
            className={classnames(
              'flex flex-col justify-center',
              'text-center whitespace-nowrap',
              'shadow-none',
              'text-white',
              'transition-all',
              toIntentColor({
                prefix: 'bg',
                intent,
                intentWeight: 500,
              }),
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
