import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'Root__P';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export type PProps = ExtensionProps;

const P: React.FC<PProps> = ({ className, children, ...rests }) => {
  return (
    <p {...rests} className={classnames(CLASSNAME, className, 'text-base font-light leading-relaxed mt-0 mb-4')}>
      {children}
    </p>
  );
};

export { P };
export default P;
