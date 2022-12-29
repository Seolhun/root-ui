import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Tab__Panels';
type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabPanelsProps extends ElementProps {}

export const TabPanels = React.forwardRef<ElementType, TabPanelsProps>(({ children, className, ...rests }, ref) => {
  return (
    <Tab.Panels {...rests} ref={ref} as="ul" className={clsx(CLASSNAME, className, 'list-none')}>
      {children}
    </Tab.Panels>
  );
});
