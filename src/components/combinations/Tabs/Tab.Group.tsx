import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

const CLASSNAME = 'Root__TabGroup';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabGroupProps extends ElementProps {
  /**
   * Tab default index
   */
  defaultIndex?: number;

  /**
   * Tab onChange
   */
  onChangeTab?: (index: number) => void;

  /**
   * Selected tab index
   */
  selectedIndex?: number;

  /**
   * Tab direction
   */
  vertical?: boolean;

  /**
   * Is tab manual?
   */
  manual?: boolean;
}

export const TabGroup = React.forwardRef<ElementType, TabGroupProps>(
  ({ children, className, defaultIndex, onChangeTab, selectedIndex, vertical, manual, ...others }, ref) => {
    return (
      <Tab.Group
        defaultIndex={defaultIndex}
        onChange={onChangeTab}
        selectedIndex={selectedIndex}
        vertical={vertical}
        manual={manual}
      >
        <div {...others} ref={ref} className={clsx(CLASSNAME, className, 'w-full')}>
          {children}
        </div>
      </Tab.Group>
    );
  },
);
