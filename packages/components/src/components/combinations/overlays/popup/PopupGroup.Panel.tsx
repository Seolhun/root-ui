import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

import { popupGroup } from './Popup.styles';
import { PopupRenderer } from './Popup.types';
import { PopupContext } from './PopupContext';

const CLASSNAME = 'Root__PopupGroupPanel';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopupGroupPanelProps {
  /**
   * Custom renderer for the popup
   */
  children: PopupRenderer;
  /**
   * @default 50
   */
  zIndex?: number;
}

export const PopupGroupPanel = React.forwardRef<ElementType, OmitBy<ElementProps, 'children'> & PopupGroupPanelProps>(
  ({ children, className, zIndex = 50 }, ref) => {
    const [popups] = React.useContext(PopupContext);

    return (
      <section className={clsx(CLASSNAME, className, panel())} ref={ref} style={{ zIndex }}>
        {children({ popups })}
      </section>
    );
  },
);

const { panel } = popupGroup();
