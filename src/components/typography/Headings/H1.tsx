import * as React from 'react';
import classNames from 'classnames';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H1';
type ElementType = HTMLHeadingElement;
export interface H1Props extends HeadingProps {}

const H1 = React.forwardRef<ElementType, H1Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading
      {...rests}
      as="h1"
      ref={ref}
      className={classNames(CLASSNAME, className, 'text-6xl font-bold leading-normal mt-0 mb-3')}
    >
      {children}
    </Heading>
  );
});

export { H1 };
export default H1;
