import React from 'react';
import classNames from 'classnames';

import { Heading } from './Heading';
import { HeadingProps } from './Heading.types';

const CLASSNAME = 'Root__H2';

const H2 = ({ className, children, ...rests }: HeadingProps) => {
  return (
    <Heading
      {...rests}
      as="h2"
      className={classNames(CLASSNAME, className, 'text-5xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
};

export { H2 };
export default H2;
