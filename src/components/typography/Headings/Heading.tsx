import React from 'react';
import classNames from 'classnames';

import { Text } from '../Text';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Heading';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;

export interface HeadingProps extends ElementProps, AgnosticTagProps {}

const Heading = ({ className, children, as, ...rests }: HeadingProps) => {
  return (
    <Text {...rests} as={as} className={classNames(CLASSNAME, className)}>
      {children}
    </Text>
  );
};

export { Heading };
export default Heading;
