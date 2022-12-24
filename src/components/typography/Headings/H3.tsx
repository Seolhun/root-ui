import React from 'react';
import classNames from 'classnames';

import { Heading } from './Heading';
import { HeadingProps } from './Heading.types';

const CLASSNAME = 'Root__H3';

const H3 = ({ className, children, ...rests }: HeadingProps) => {
  return (
    <Heading
      {...rests}
      as="h3"
      className={classNames(
        CLASSNAME,
        className,
        'text-dark-9 dark:text-light-1',
        'text-4xl font-bold leading-normal mt-1 mb-2',
      )}
    >
      {children}
    </Heading>
  );
};

export { H3 };
export default H3;
