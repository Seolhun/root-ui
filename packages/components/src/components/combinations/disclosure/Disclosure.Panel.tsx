import {
  DisclosurePanel as HeadlessDisclosurePanel,
  DisclosurePanelProps as HeadlessDisclosurePanelProps,
} from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

const CLASSNAME = 'Root__DisclosurePanel';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export type DisclosurePanelProps = OmitBy<HeadlessDisclosurePanelProps, 'as'> & ElementProps;

export const DisclosurePanel = React.forwardRef<ElementType, DisclosurePanelProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <HeadlessDisclosurePanel {...others} as="div" className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </HeadlessDisclosurePanel>
    );
  },
);
