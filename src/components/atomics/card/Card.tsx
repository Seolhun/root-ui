import React from 'react';
import classNames from 'classnames';
import { RootScale, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Card';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface CardProps extends ExtensionProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

const Card = React.forwardRef<Element, CardProps>(({ children, className, scale = 'md', ...rests }, ref) => {
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
        'overflow-hidden',
        toScaleMatch({
          sm: () => 'py-2 px-4',
          md: () => 'py-3 px-4',
          lg: () => 'py-4 px-6',
        })(scale),
      )}
    >
      {children}
    </div>
  );
});

export { Card };
export default Card;
