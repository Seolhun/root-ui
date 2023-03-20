import * as React from 'react';
import clsx from 'clsx';

export interface StorybookContentProps {
  children: React.ReactNode | ((args: RenderChildrenArgs) => React.ReactNode);

  noAlign?: boolean;

  noGap?: boolean;
}

export interface RenderChildrenArgs {
  root: HTMLDivElement | null;
  isDark: boolean;
}

export const StorybookContent = React.forwardRef<HTMLDivElement, StorybookContentProps>(
  ({ children, noAlign, noGap }, ref) => {
    const [lightRootElement, setLightRootElement] = React.useState<HTMLDivElement | null>(null);
    const [darkRootElement, setDarkRootElement] = React.useState<HTMLDivElement | null>(null);

    const renderChildren = (args: RenderChildrenArgs) => {
      const isFunction = typeof children === 'function';
      if (isFunction) {
        return children(args);
      }
      return children;
    };

    return (
      <div className="flex w-full h-full min-h-screen" ref={ref}>
        <div
          ref={setLightRootElement}
          className={clsx(
            'StorybookContent__Light',
            'flex flex-col flex-1 justify-center',
            {
              'items-center': !noAlign,
              'gap-4': !noGap,
            },
            'bg-cream',
            'p-4',
          )}
        >
          {renderChildren({ root: lightRootElement, isDark: false })}
        </div>
        <div
          ref={setDarkRootElement}
          className={clsx(
            'StorybookContent__Dark dark',
            'flex flex-col flex-1 justify-center',
            {
              'items-center': !noAlign,
              'gap-4': !noGap,
            },
            'bg-space',
            'p-4',
          )}
        >
          {renderChildren({ root: darkRootElement, isDark: true })}
        </div>
      </div>
    );
  },
);
