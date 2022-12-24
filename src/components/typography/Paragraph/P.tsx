import React from 'react';
import classNames from 'classnames';

import { Text } from '../Text';

const CLASSNAME = 'Root__P';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps extends ElementProps {}

const P = React.forwardRef<ElementType, PProps>(({ className, children, ...rests }, ref) => {
  return (
    <Text {...rests} as="p" ref={ref} className={classNames(CLASSNAME, className, 'font-light', 'mt-0 mb-1')}>
      {children}
    </Text>
  );
});

export { P };
export default P;
