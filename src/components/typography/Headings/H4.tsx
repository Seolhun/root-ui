import * as React from 'react';
import clsx from 'clsx';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H4';
type ElementType = HTMLHeadingElement;
export interface H4Props extends HeadingProps {}

export const H4 = React.forwardRef<ElementType, H4Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading {...rests} as="h4" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});
