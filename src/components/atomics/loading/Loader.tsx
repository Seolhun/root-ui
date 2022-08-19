import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Loader';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export type LoaderProps = ExtensionProps;

const Loader: React.FC<LoaderProps> = ({ className, ...rests }) => {
  return (
    <div
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'inline-flex',
        'h-12 w-12',
        'border-4 border-t-4 border-gray-200',
        'ease-linear rounded-full',
      )}
    ></div>
  );
};

export { Loader };
export default Loader;
