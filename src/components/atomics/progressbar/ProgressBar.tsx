import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';
import { Tag } from '../tag';

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
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

const ProgressBar = React.forwardRef<ElementType, ProgressBarProps>(
  ({
    className,
    badge,
    progress = 0,
    simple = false,
    scale = 'md',
    intent = 'primary',
    ...rests
  }: ProgressBarProps) => {
    return (
      <div {...rests} className={clsx(CLASSNAME, className, 'relative', 'w-full')}>
        <div className="flex mb-2 items-center justify-between">
          <div>
            {badge && (
              <Tag intent={intent} scale={scale}>
                {badge}
              </Tag>
            )}
          </div>
          {!simple && (
            <div className="text-right">
              <div
                className={clsx(
                  'inline-block',
                  'text-xs font-semibold',
                  toIntentMatch({
                    neutral: () => clsx('text-neutral dark:text-neutral2'),
                    light: () => clsx('text-light dark:text-light2'),
                    dark: () => clsx('text-dark dark:text-dark2'),
                    primary: () => clsx('text-primary dark:text-primary2'),
                    info: () => clsx('text-info dark:text-info2'),
                    success: () => clsx('text-success dark:text-success2'),
                    accent: () => clsx('text-accent dark:text-accent2'),
                    warning: () => clsx('text-warning dark:text-warning2'),
                    danger: () => clsx('text-danger dark:text-danger2'),
                  })(intent),
                )}
              >{`${progress}%`}</div>
            </div>
          )}
        </div>
        <div
          className={clsx(
            'flex flex-1',
            'w-full h-2 mb-4',
            'text-xs',
            'rounded',
            'overflow-hidden',
            toIntentMatch({
              neutral: () => clsx('bg-neutral/20 dark:bg-neutral2/30'),
              light: () => clsx('bg-light/20 dark:bg-light2/30'),
              dark: () => clsx('bg-dark/20 dark:bg-dark2/30'),
              primary: () => clsx('bg-primary/20 dark:bg-primary2/30'),
              info: () => clsx('bg-info/20 dark:bg-info2/30'),
              success: () => clsx('bg-success/20 dark:bg-success2/30'),
              accent: () => clsx('bg-accent/20 dark:bg-accent2/30'),
              warning: () => clsx('bg-warning/20 dark:bg-warning2/30'),
              danger: () => clsx('bg-danger/20 dark:bg-danger2/30'),
            })(intent),
          )}
        >
          <div
            className={clsx(
              'flex flex-col justify-center',
              'text-center whitespace-nowrap',
              'shadow-none',
              'text-white',
              toScaleMatch({
                xs: () => 'w-8 h-8 min-w-8 min-h-8',
                sm: () => 'w-12 h-12 min-w-12 min-h-12',
                md: () => 'w-16 h-16 min-w-16 min-h-16',
                lg: () => 'w-20 h-20 min-w-20 min-h-20',
                xl: () => 'w-24 h-24 min-w-24 min-h-24',
              })(scale),
              toIntentMatch({
                neutral: () => clsx('bg-neutral dark:bg-neutral2'),
                light: () => clsx('bg-light dark:bg-light2'),
                dark: () => clsx('bg-dark dark:bg-dark2'),
                primary: () => clsx('bg-primary dark:bg-primary2'),
                info: () => clsx('bg-info dark:bg-info2'),
                success: () => clsx('bg-success dark:bg-success2'),
                accent: () => clsx('bg-accent dark:bg-accent2'),
                warning: () => clsx('bg-warning dark:bg-warning2'),
                danger: () => clsx('bg-danger dark:bg-danger2'),
              })(intent),
              'transition-all',
            )}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    );
  },
);

export { ProgressBar };
export default ProgressBar;
