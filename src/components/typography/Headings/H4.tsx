import * as React from 'react';
import clsx from 'clsx';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H4';
type ElementType = HTMLHeadingElement;
export interface H4Props extends HeadingProps {}

const H4 = React.forwardRef<ElementType, H4Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading
      {...rests}
      as="h4"
      ref={ref}
      className={clsx(CLASSNAME, className, 'text-3xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
});

export { H4 };
export default H4;
