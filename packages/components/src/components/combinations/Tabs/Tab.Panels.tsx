import { TabPanels as HeadlessTabPanels, TabPanelsProps as HeadlessTabPanelsProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

const CLASSNAME = 'Root__Tab__Panels';
type ElementType = HTMLUListElement;

export type TabPanelsProps = OmitBy<HeadlessTabPanelsProps<'ul'>, 'as'>;

export const TabPanels = React.forwardRef<ElementType, TabPanelsProps>(({ className, children, ...others }, ref) => {
  return (
    <HeadlessTabPanels {...others} as="ul" className={clsx(CLASSNAME, className, 'list-none')} ref={ref}>
      {children}
    </HeadlessTabPanels>
  );
});
