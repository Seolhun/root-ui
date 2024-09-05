import clsx from 'clsx';
import * as React from 'react';

type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;

const CLASSNAME = 'Root__Image';

export interface ImageProps extends ElementProps {
  error?: React.ReactNode;
}

export const Image = React.forwardRef<ElementType, ImageProps>(({ children, className, ...others }, ref) => {
  return (
    <img {...others} className={clsx(CLASSNAME, className)} ref={ref}>
      {children}
    </img>
  );
});
