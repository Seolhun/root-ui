import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Heading Root__H5';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export type H5Props = ExtensionProps;

const H5: React.FC<H5Props> = ({ className, children, ...rests }) => {
  return (
    <h5 {...rests} className={classNames(CLASSNAME, className, 'text-2xl font-bold leading-normal mt-1 mb-2')}>
      {children}
    </h5>
  );
};

export { H5 };
export default H5;
