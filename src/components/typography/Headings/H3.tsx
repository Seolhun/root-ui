import * as React from 'react';
import clsx from 'clsx';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H3';
type ElementType = HTMLHeadingElement;
export interface H3Props extends HeadingProps {}

const H3 = React.forwardRef<ElementType, H3Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading
      {...rests}
      as="h3"
      ref={ref}
      className={clsx(CLASSNAME, className, 'text-4xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
});

export { H3 };
export default H3;
