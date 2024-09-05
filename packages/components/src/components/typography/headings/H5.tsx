import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H5';
type ElementType = HTMLHeadingElement;
export interface H5Props extends HeadingProps {}

export const H5 = React.forwardRef<ElementType, H5Props>(({ children, className, ...others }, ref) => {
  return (
    <Heading {...others} as="h5" className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </Heading>
  );
});
