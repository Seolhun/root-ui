import * as React from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch } from '../../../system';
import { Card } from '../../atomics';

const CLASSNAME = 'Root__Tab__Panel';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export interface TabPanelProps extends ElementProps {
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

export const TabPanel = React.forwardRef<ElementType, TabPanelProps>(
  ({ children, className, scale = 'md', intent = 'primary', ...rests }, ref) => {
    return (
      <Tab.Panel {...rests} ref={ref} as="li" role="tabpanel" className={clsx(CLASSNAME, className)}>
        <Card className="w-full">{children}</Card>
      </Tab.Panel>
    );
  },
);
