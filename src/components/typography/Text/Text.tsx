import * as React from 'react';
import clsx from 'clsx';

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
      className={clsx(CLASSNAME, className, 'leading-relaxed', 'text-space-1 dark:text-cream-1')}
    >
      {children}
    </Box>
  );
});

export { Text };
export default Text;
