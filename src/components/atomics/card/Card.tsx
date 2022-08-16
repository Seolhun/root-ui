import React from 'react';
import classnames from 'classnames';

import { toIntentColorByOptions } from '@/utils';

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
        'align-bottom sm:align-middle',
        'rounded-lg shadow',
        'text-left text-gray-600',
        'transform transition-all',
        'overflow-hidden',
        toIntentColorByOptions(['hover'], 'border', 'primary'),
      )}
    >
      {children}
    </div>
  );
};

export { Card };
export default Card;
