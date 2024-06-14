import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale } from '../../../system';

const CLASSNAME = 'Root__TabGroup';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabGroupProps extends ElementProps {
  /**
   * Tab default index
   */
  defaultIndex?: number;

  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Is tab manual?
   */
  manual?: boolean;

  /**
   * Tab onChange
   */
  onChangeTab?: (index: number) => void;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * Selected tab index
   */
  selectedIndex?: number;

  /**
   * Tab direction
   */
  vertical?: boolean;
}

export const TabGroup = React.forwardRef<ElementType, TabGroupProps>(
  (
    {
      className,
      children,
      defaultIndex,
      intent = 'primary',
      manual,
      onChangeTab,
      scale = 'md',
      selectedIndex,
      vertical,
      ...others
    },
    ref,
  ) => {
    return (
      <Tab.Group
        defaultIndex={defaultIndex}
        manual={manual}
        onChange={onChangeTab}
        selectedIndex={selectedIndex}
        vertical={vertical}
      >
        <div {...others} className={clsx(CLASSNAME, className, 'group', 'w-full')} ref={ref}>
          {children}
        </div>
      </Tab.Group>
    );
  },
);
