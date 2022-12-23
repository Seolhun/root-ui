import * as React from 'react';
import classNames from 'classnames';

export interface StorybookContentProps {
  children: React.ReactNode;
}

export const StorybookContent: React.FC<StorybookContentProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className={classNames('flex flex-col flex-1 items-center justify-center', 'bg-white', 'gap-4', 'p-4')}>
        {children}
      </div>
      <div
        className={classNames('dark', 'flex flex-col flex-1 items-center justify-center', 'bg-light-9', 'gap-4', 'p-4')}
      >
        {children}
      </div>
    </div>
  );
};
