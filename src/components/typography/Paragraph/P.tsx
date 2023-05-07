import clsx from 'clsx';
import * as React from 'react';

import { Box } from '~/components/common';
import { AgnosticTagProps } from '~/system';

const CLASSNAME = 'Root__P';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps extends ElementProps {}

export const P = React.forwardRef<ElementType, AgnosticTagProps & PProps>(
  ({ className, children, as = 'p', ...others }, ref) => {
    return (
      <Box {...others} as={as} ref={ref} className={clsx(CLASSNAME, className, 'leading-snug', 'mt-0 mb-1')}>
        {children}
      </Box>
    );
  },
);
