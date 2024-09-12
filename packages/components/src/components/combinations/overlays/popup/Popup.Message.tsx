import clsx from 'clsx';
import * as React from 'react';

import { Text } from '~/components/typography';

import { popup } from './Popup.styles';

const CLASSNAME = 'Root__Popup__Message';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopupMessageProps {}

export const PopupMessage = React.forwardRef<ElementType, ElementProps & PopupMessageProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Text {...others} className={clsx(CLASSNAME, className, message())} ref={ref}>
        {children}
      </Text>
    );
  },
);

const { message } = popup();
