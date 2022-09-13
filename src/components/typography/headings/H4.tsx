import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Heading Root__H4';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export type H4Props = ExtensionProps;

const H4: React.FC<H4Props> = ({ className, children, ...rests }) => {
  return (
    <h4 {...rests} className={classNames(CLASSNAME, className, 'text-3xl font-bold leading-normal mt-1 mb-2')}>
      {children}
    </h4>
  );
};

export { H4 };
export default H4;
