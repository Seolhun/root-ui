import React from 'react';
import classNames from 'classnames';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H3';

const H3 = ({ className, children, ...rests }: HeadingProps) => {
  return (
    <Heading
      {...rests}
      as="h3"
      className={classNames(CLASSNAME, className, 'text-4xl font-bold leading-normal mt-1 mb-2')}
    >
      {children}
    </Heading>
  );
};

export { H3 };
export default H3;
