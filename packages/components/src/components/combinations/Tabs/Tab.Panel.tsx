import { TabPanel as HeadlessTabPanel, TabPanelProps as HeadlessTabPanelProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Tab__Panel';
type ElementType = HTMLDivElement;

export type TabPanelProps = OmitBy<HeadlessTabPanelProps<'div'>, 'as'>;

export const TabPanel = React.forwardRef<ElementType, TabPanelProps>(({ className, children, ...others }, ref) => {
  return (
    <HeadlessTabPanel {...others} as="div" className={clsx(CLASSNAME, className, 'w-full')} ref={ref}>
      {children}
    </HeadlessTabPanel>
  );
});
