import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'Root__H6';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export type H6Props = ExtensionProps;

const H6: React.FC<H6Props> = ({ className, children, ...rests }) => {
  return (
    <h6
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-1xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h6>
  );
};

export { H6 };
export default H6;
