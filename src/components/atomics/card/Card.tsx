import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'Root__Card';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export type CardProps = ExtensionProps;

const Card: React.FC<CardProps> = ({ children, className, ...rests }) => {
  return (
    <div
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'block',
        'bg-white',
        'rounded-lg shadow',
        'transform transition-all',
        'overflow-hidden',
      )}
    >
      {children}
    </div>
  );
};

export { Card };
export default Card;
