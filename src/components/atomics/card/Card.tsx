import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Card';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export type CardProps = ExtensionProps;

const Card = React.forwardRef<Element, CardProps>(({ children, className, ...rests }, ref) => {
  return (
    <div
      {...rests}
      ref={ref}
      className={classNames(
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
});

export { Card };
export default Card;
