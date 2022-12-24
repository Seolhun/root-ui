import * as React from 'react';
import classNames from 'classnames';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H2';
type ElementType = HTMLHeadingElement;
export interface H2Props extends HeadingProps {}

const H2 = React.forwardRef<ElementType, H2Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading
      {...rests}
      as="h2"
      ref={ref}
      className={classNames(CLASSNAME, className, 'text-5xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
});

export { H2 };
export default H2;
