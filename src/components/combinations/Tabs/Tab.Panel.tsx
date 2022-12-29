import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Text } from '../../typography';

const CLASSNAME = 'Root__Tab__Panel';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabPanelProps extends ElementProps {}

export const TabPanel = React.forwardRef<ElementType, TabPanelProps>(({ children, className, ...rests }, ref) => {
  return (
    <Tab.Panel {...rests} ref={ref} as="li" role="tabpanel" className={clsx(CLASSNAME, className, 'w-full')}>
      <Text>{children}</Text>
    </Tab.Panel>
  );
});
