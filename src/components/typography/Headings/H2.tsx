import * as React from 'react';
import clsx from 'clsx';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H2';
type ElementType = HTMLHeadingElement;
export interface H2Props extends HeadingProps {}

const H2 = React.forwardRef<ElementType, H2Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading {...rests} as="h2" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});

export { H2 };
export default H2;
