import React from 'react';
import classNames from 'classnames';

import { Box } from '../../common';

const CLASSNAME = 'Root__Text';
type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
export interface TextProps extends ElementProps {}

const Text = ({ className, children, ...rests }: TextProps) => {
  return (
    <Box
      {...rests}
      as="p"
      className={classNames(
        CLASSNAME,
        className,
        'text-base font-light leading-relaxed',
        'text-dark-9 dark:text-light-1',
        'mt-0 mb-1',
      )}
    >
      {children}
    </Box>
  );
};

export { Text };
export default Text;
