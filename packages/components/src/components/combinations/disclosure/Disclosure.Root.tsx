import { Disclosure as HeadlessDisclosure, DisclosureProps as HeadlessDisclosureProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

const CLASSNAME = 'Root__Disclosure';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export type DisclosureProps = OmitBy<HeadlessDisclosureProps, 'as'> & ElementProps;

export const DisclosureRoot = React.forwardRef<ElementType, DisclosureProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <HeadlessDisclosure {...others} as="div" className={clsx(CLASSNAME, className, 'w-full')} ref={ref}>
        {children}
      </HeadlessDisclosure>
    );
  },
);
