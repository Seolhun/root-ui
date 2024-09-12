import clsx from 'clsx';
import * as React from 'react';

import { popupGroup } from './Popup.styles';
import { usePopupContext } from './PopupContext';
import { usePopup } from './usePopup';

const CLASSNAME = 'Root__PopupGroupBackdrop';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface PopupGroupBackdropProps {}

export const PopupGroupBackdrop = React.forwardRef<ElementType, ElementProps & PopupGroupBackdropProps>(
  ({ children, className, ...others }, ref) => {
    const [popups] = usePopupContext();
    const { closePopup } = usePopup();

    const onClickToClose = React.useCallback(() => {
      const lastPopup = popups[popups.length - 1];
      if (lastPopup) {
        closePopup(lastPopup.id);
      }
    }, [closePopup, popups]);

    if (popups.length === 0) {
      return null;
    }

    return (
      <div {...others} ref={ref} className={clsx(CLASSNAME, className, backdrop())} onClick={onClickToClose}>
        {children}
      </div>
    );
  },
);

const { backdrop } = popupGroup();
