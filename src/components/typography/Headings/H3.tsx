import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H3';
type ElementType = HTMLHeadingElement;
export interface H3Props extends HeadingProps {}

export const H3 = React.forwardRef<ElementType, H3Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading {...rests} as="h3" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});
