import * as React from 'react';
import classNames from 'classnames';

export interface StorybookContentProps {
  children: React.ReactNode;

  noAlign?: boolean;

  noGap?: boolean;
}

export const StorybookContent: React.FC<StorybookContentProps> = ({ children, noAlign, noGap }) => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <div
        className={classNames(
          'flex flex-col flex-1 justify-center',
          {
            'items-center': !noAlign,
            'gap-4': !noGap,
          },
          'bg-white',
          'p-4',
        )}
      >
        {children}
      </div>
      <div
        className={classNames(
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
        {children}
      </div>
    </div>
  );
};
