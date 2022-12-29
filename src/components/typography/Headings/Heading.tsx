import * as React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Heading';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface HeadingProps extends ElementProps {}

const Heading = React.forwardRef<ElementType, HeadingProps & Required<AgnosticTagProps>>(
  ({ className, children, as, ...rests }, ref) => {
    return (
      <Text {...rests} as={as} ref={ref} className={clsx(CLASSNAME, className)}>
        {children}
      </Text>
    );
  },
);

export { Heading };
export default Heading;
