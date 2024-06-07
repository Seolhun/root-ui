import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { Text } from '../../../components/typography';

const CLASSNAME = 'Root__Tab__Panel';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabPanelProps extends ElementProps {}

export const TabPanel = React.forwardRef<ElementType, TabPanelProps>(({ children, className, ...others }, ref) => {
  return (
    <Tab.Panel {...others} as="li" className={clsx(CLASSNAME, className, 'w-full')} ref={ref}>
      <Text>{children}</Text>
    </Tab.Panel>
  );
});
