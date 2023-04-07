import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { RootGroupContextValues, RootGroupProvider } from '~/components/common';
import { RootIntent, RootScale } from '~/system';

const CLASSNAME = 'Root__TabGroup';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabGroupProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;

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
  (
    {
      children,
      className,
      scale = 'md',
      intent = 'primary',
      defaultIndex,
      onChangeTab,
      selectedIndex,
      vertical,
      manual,
      ...others
    },
    ref,
  ) => {
    const contextValue = React.useMemo<RootGroupContextValues>(() => {
      return {
        scale,
        intent,
      };
    }, [intent, scale]);

    return (
      <RootGroupProvider value={contextValue}>
        <Tab.Group
          defaultIndex={defaultIndex}
          onChange={onChangeTab}
          selectedIndex={selectedIndex}
          vertical={vertical}
          manual={manual}
        >
          <div {...others} ref={ref} className={clsx(CLASSNAME, className, 'group', 'w-full')}>
            {children}
          </div>
        </Tab.Group>
      </RootGroupProvider>
    );
  },
);
