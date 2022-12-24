import React from 'react';
import classNames from 'classnames';

import { Text } from '../Text';

const CLASSNAME = 'Root__P';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
export interface PProps extends ElementProps {}

const P = ({ className, children, ...rests }: PProps) => {
  return (
    <Text {...rests} as="p" className={classNames(CLASSNAME, className, 'font-light', 'mt-0 mb-1')}>
      {children}
    </Text>
  );
};

export { P };
export default P;
