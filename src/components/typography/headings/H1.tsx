import React from 'react';
import classNames from 'classnames';

import { Heading } from './Heading';
import { HeadingProps } from './Heading.types';

const CLASSNAME = 'Root__H1';

const H1 = ({ className, children, ...rests }: HeadingProps) => {
  return (
    <Heading
      {...rests}
      as="h1"
      className={classNames(CLASSNAME, className, 'text-6xl font-bold leading-normal mt-0 mb-3')}
    >
      {children}
    </Heading>
  );
};

export { H1 };
export default H1;
