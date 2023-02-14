import * as React from 'react';
import clsx from 'clsx';

export interface StorybookContentProps {
  children: React.ReactNode | ((args: RenderChildrenArgs) => React.ReactNode);

  noAlign?: boolean;

  noGap?: boolean;
}

export interface RenderChildrenArgs {
  ref: React.RefObject<HTMLDivElement>;
  isDark: boolean;
}

export const StorybookContent = React.forwardRef<HTMLDivElement, StorybookContentProps>(
  ({ children, noAlign, noGap }, ref) => {
    const lightRef = React.useRef<HTMLDivElement>(null);
    const darkRef = React.useRef<HTMLDivElement>(null);

    const renderChildren = React.useCallback(
      (args: RenderChildrenArgs) => {
        const isFunction = typeof children === 'function';
        if (isFunction) {
          return children(args);
        }
        return children;
      },
      [children],
    );

    return (
      <div className="flex w-full h-full min-h-screen" ref={ref}>
        <div
          ref={lightRef}
          className={clsx(
            'flex flex-col flex-1 justify-center',
            {
              'items-center': !noAlign,
              'gap-4': !noGap,
            },
            'bg-white',
            'p-4',
          )}
        >
          {renderChildren({ ref: lightRef, isDark: false })}
        </div>
        <div
          ref={darkRef}
          className={clsx(
            'dark',
            'flex flex-col flex-1 justify-center',
            {
              'items-center': !noAlign,
              'gap-4': !noGap,
            },
            'bg-light-9',
            'p-4',
          )}
        >
          {renderChildren({ ref: darkRef, isDark: true })}
        </div>
      </div>
    );
  },
);
