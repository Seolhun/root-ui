import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';

const CLASSNAME = 'Root__Tab__Panels';
type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TabPanelsProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const TabPanels = React.forwardRef<ElementType, TabPanelsProps>(
  ({ children, className, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <Tab.Panels {...rests} ref={ref} as="ul" className={clsx(CLASSNAME, className)}>
        {children}
      </Tab.Panels>
    );
  },
);
