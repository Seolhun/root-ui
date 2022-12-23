import React from 'react';
import classNames from 'classnames';

import { Box } from '../../common';
import { HeadingProps } from './Heading.types';

const CLASSNAME = 'Root__Heading';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({
  className,
  children,
  as,
  ...rests
}: HeadingProps & ElementProps & { as: keyof JSX.IntrinsicElements }) => {
  return (
    <Box {...rests} as={as} className={classNames(CLASSNAME, className, 'text-dark-9 dark:text-light-1')}>
      {children}
    </Box>
  );
};

export { Heading };
export default Heading;
