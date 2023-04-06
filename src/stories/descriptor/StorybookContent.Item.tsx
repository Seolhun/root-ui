import clsx from 'clsx';
import * as React from 'react';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentItemProps {
  children: React.ReactNode | ((args: RenderChildrenArgs) => React.ReactNode);

  noAlign?: boolean;

  noGap?: boolean;
}

export interface RenderChildrenArgs {
  root: HTMLElement | null;
}

export const StorybookContentItem = ({
  children,
  className,
  noAlign,
  noGap,
  ...others
}: ElementProps & StorybookContentItemProps) => {
  const [root, setRoot] = React.useState<HTMLDivElement | null>(null);

  const renderChildren = (args: RenderChildrenArgs) => {
    const isFunction = typeof children === 'function';
    if (isFunction) {
      return children(args);
    }
    return children;
  };

  return (
    <div
      {...others}
      ref={setRoot}
      className={clsx(
        className,
        'StorybookContentItem',
        'flex flex-1 justify-center',
        'min-h-full',
        {
          'items-center': !noAlign,
          'gap-2': !noGap,
        },
        'p-4',
      )}
    >
      {renderChildren({ root })}
    </div>
  );
};

export const createStorybookContentItem = (hocProps: ElementProps) => {
  return ({ children, className, ...others }: ElementProps & StorybookContentItemProps) => (
    <StorybookContentItem {...hocProps} {...others} className={clsx(hocProps.className, className)}>
      {children}
    </StorybookContentItem>
  );
};
