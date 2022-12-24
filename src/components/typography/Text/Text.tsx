import React from 'react';
import classNames from 'classnames';

import { Box } from '../../common';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Text';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TextProps extends ElementProps, AgnosticTagProps {}

const Text = React.forwardRef<ElementType, TextProps>(({ className, children, as = 'p', ...rests }, ref) => {
  return (
    <Box
      {...rests}
      as={as}
      ref={ref}
      className={classNames(CLASSNAME, className, 'text-base leading-relaxed', 'text-dark-9 dark:text-light-1')}
    >
      {children}
    </Box>
  );
});

export { Text };
export default Text;
