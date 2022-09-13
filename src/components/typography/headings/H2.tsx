import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Heading Root__H2';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export type H2Props = ExtensionProps;

const H2: React.FC<H2Props> = ({ className, children, ...rests }) => {
  return (
    <h2 {...rests} className={classNames(CLASSNAME, className, 'text-5xl font-bold leading-normal mt-1 mb-2')}>
      {children}
    </h2>
  );
};

export { H2 };
export default H2;
