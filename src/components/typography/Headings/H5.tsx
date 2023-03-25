import * as React from 'react';
import clsx from 'clsx';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H5';
type ElementType = HTMLHeadingElement;
export interface H5Props extends HeadingProps {}

export const H5 = React.forwardRef<ElementType, H5Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading {...rests} as="h5" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});
