import * as React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Heading';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

// It is for common usage for heading element. so, ElementProps is required.
export interface HeadingProps extends ElementProps {}

export const Heading = React.forwardRef<ElementType, HeadingProps & Required<AgnosticTagProps>>(
  ({ className, children, as, ...rests }, ref) => {
    return (
      <Text {...rests} as={as} ref={ref} className={clsx(CLASSNAME, className, 'leading-normal')}>
        {children}
      </Text>
    );
  },
);
