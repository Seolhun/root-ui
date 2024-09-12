import clsx from 'clsx';
import * as React from 'react';

import { Text } from '~/components/typography';

import { popup } from './Popup.styles';

const CLASSNAME = 'Root__Popup__Title';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const PopupTitle = React.forwardRef<ElementType, ElementProps>(({ children, className, ...others }, ref) => {
  return (
    <Text {...others} className={clsx(CLASSNAME, className, title())} ref={ref}>
      {children}
    </Text>
  );
});

const { title } = popup();
