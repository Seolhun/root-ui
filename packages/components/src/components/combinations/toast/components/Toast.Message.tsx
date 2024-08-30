import clsx from 'clsx';
import * as React from 'react';

import { P } from '~/components/typography';

const CLASSNAME = 'Root__Toast__Message';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ToastMessageProps {}

export const ToastMessage = React.forwardRef<ElementType, ElementProps & ToastMessageProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <P {...others} className={clsx(CLASSNAME, className, 'whitespace-pre-wrap')} ref={ref}>
        {children}
      </P>
    );
  },
);
