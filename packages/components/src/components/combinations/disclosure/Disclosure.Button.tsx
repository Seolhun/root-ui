import {
  DisclosureButton as HeadlessDisclosureButton,
  DisclosureButtonProps as HeadlessDisclosureButtonProps,
} from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

const CLASSNAME = 'Root__DisclosureButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export type DisclosureButtonProps = OmitBy<HeadlessDisclosureButtonProps, 'as'> & ElementProps;

export const DisclosureButton = React.forwardRef<ElementType, DisclosureButtonProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <HeadlessDisclosureButton {...others} as="button" className={clsx(CLASSNAME, className, 'w-full')} ref={ref}>
        {children}
      </HeadlessDisclosureButton>
    );
  },
);
