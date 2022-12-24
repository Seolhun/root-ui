import * as React from 'react';
import classNames from 'classnames';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H5';
type ElementType = HTMLHeadingElement;
export interface H5Props extends HeadingProps {}

const H5 = React.forwardRef<ElementType, H5Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading
      {...rests}
      as="h5"
      ref={ref}
      className={classNames(CLASSNAME, className, 'text-2xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
});

export { H5 };
export default H5;
