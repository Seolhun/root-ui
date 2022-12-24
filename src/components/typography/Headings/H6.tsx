import React from 'react';
import classNames from 'classnames';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H6';

const H6 = ({ className, children, ...rests }: HeadingProps) => {
  return (
    <Heading
      {...rests}
      as="h6"
      className={classNames(CLASSNAME, className, 'text-1xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
};

export { H6 };
export default H6;
