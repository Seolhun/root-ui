import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Heading Root__H3';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export type H3Props = ExtensionProps;

const H3: React.FC<H3Props> = ({ className, children, ...rests }) => {
  return (
    <h3 {...rests} className={classNames(CLASSNAME, className, 'text-4xl font-bold leading-normal mt-1 mb-2')}>
      {children}
    </h3>
  );
};

export { H3 };
export default H3;
