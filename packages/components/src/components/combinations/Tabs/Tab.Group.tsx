import { TabGroup as HeadlessTabGroup, TabGroupProps as HeadlessTabGroupProps } from '@headlessui/react';
import { RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__TabGroup';
type ElementType = HTMLDivElement;

export type TabGroupProps = OmitBy<HeadlessTabGroupProps<'div'>, 'as'> & {
  /**
   * @default primary
   */
  intent?: RootIntentType;
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
};

export const TabGroup = React.forwardRef<ElementType, TabGroupProps>(
  ({ className, children, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <HeadlessTabGroup
        {...others}
        as="div"
        className={clsx(CLASSNAME, className, 'group', 'w-full')}
        data-group-root-intent={intent}
        data-group-root-scale={scale}
        ref={ref}
      >
        {children}
      </HeadlessTabGroup>
    );
  },
);
