import clsx from 'clsx';
import * as React from 'react';

import { AgnosticTagProps } from '../../../system';
import { Box } from '../../common';

const CLASSNAME = 'Root__P';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps extends ElementProps {}

export const P = React.forwardRef<ElementType, AgnosticTagProps & PProps>(
  ({ className, as = 'p', children, ...others }, ref) => {
    return (
      <Box {...others} as={as} className={clsx(CLASSNAME, className, 'leading-snug', 'mt-0 mb-1')} ref={ref}>
        {children}
      </Box>
    );
  },
);
