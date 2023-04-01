import clsx from 'clsx';
import * as React from 'react';

import { AgnosticTagProps } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__Text';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TextProps {}

export const Text = React.forwardRef<ElementType, ElementProps & AgnosticTagProps & TextProps>(
  ({ className, children, as = 'p', ...rests }, ref) => {
    return (
      <Box {...rests} as={as} ref={ref} className={clsx(CLASSNAME, className, 'text-space-1 dark:text-cream-1')}>
        {children}
      </Box>
    );
  },
);
