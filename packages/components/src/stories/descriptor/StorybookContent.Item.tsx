import clsx from 'clsx';
import * as React from 'react';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentItemProps extends Omit<ElementProps, 'children'> {
  children: ((args: RenderChildrenArgs) => React.ReactNode) | React.ReactNode;

  noAlign?: boolean;

  noGap?: boolean;
}

export interface RenderChildrenArgs {
  root: HTMLElement | null;
}

export const StorybookContentItem = ({ className, children, noAlign, noGap, ...others }: StorybookContentItemProps) => {
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
      className={clsx(
        className,
        'StorybookContentItem',
        'flex flex-1 ',
        'min-h-full',
        {
          'gap-2': !noGap,
          'items-center justify-center': !noAlign,
        },
        'py-12 px-24',
      )}
      ref={setRoot}
    >
      {renderChildren({ root })}
    </div>
  );
};

export const createStorybookContentItem = (hocProps: ElementProps) => {
  return ({ className, children, ...others }: StorybookContentItemProps) => (
    <StorybookContentItem {...hocProps} {...others} className={clsx(hocProps.className, className)}>
      {children}
    </StorybookContentItem>
  );
};
