import clsx from 'clsx';
import * as React from 'react';

import { popupGroup } from './Popup.styles';
import { usePopupContext } from './PopupContext';

const CLASSNAME = 'Root__PopupGroupOverlay';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopupGroupOverlayProps {}

export const PopupGroupOverlay = React.forwardRef<ElementType, ElementProps & PopupGroupOverlayProps>(
  ({ children, className, ...others }, ref) => {
    const [popups] = usePopupContext();

    if (popups.length === 0) {
      return null;
    }

    return (
      <div {...others} ref={ref} className={clsx(CLASSNAME, className, overlay())}>
        {children}
      </div>
    );
  },
);

const { overlay } = popupGroup();
