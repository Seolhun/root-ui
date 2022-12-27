import * as React from 'react';
import clsx from 'clsx';

export interface StorybookContentProps {
  children: React.ReactNode;

  noAlign?: boolean;

  noGap?: boolean;
}

export const StorybookContent: React.FC<StorybookContentProps> = ({ children, noAlign, noGap }) => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <div
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
        {children}
      </div>
      <div
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
        {children}
      </div>
    </div>
  );
};
