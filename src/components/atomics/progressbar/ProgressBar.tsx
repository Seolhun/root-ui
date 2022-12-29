import * as React from 'react';
import clsx from 'clsx';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch } from '../../../system';
import { Text } from '../../typography';
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
              <Text className={clsx('inline-block', `text-xs text-${intent}-600 font-semibold`)}>{`${progress}%`}</Text>
            </div>
          )}
        </div>
        <div className={clsx('flex', 'h-2 mb-4', `bg-${intent}-2`, 'text-xs', 'rounded', 'overflow-hidden')}>
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
                default: () => clsx('bg-default'),
                neutral: () => clsx('bg-neutral'),
                light: () => clsx('bg-light'),
                dark: () => clsx('bg-dark'),
                primary: () => clsx('bg-primary'),
                info: () => clsx('bg-info'),
                success: () => clsx('bg-success'),
                warning: () => clsx('bg-warning'),
                danger: () => clsx('bg-danger'),
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
