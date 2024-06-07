import clsx from 'clsx';
import * as React from 'react';

import { Box } from '../../../components/common';
import { AgnosticTagProps } from '../../../system';

const CLASSNAME = 'Root__Heading';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface HeadingProps extends ElementProps {}

export const Heading = React.forwardRef<ElementType, AgnosticTagProps & HeadingProps>(
  ({ className, as, children, ...others }, ref) => {
    return (
      <Box {...others} as={as} className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </Box>
    );
  },
);
