import { PopupCancelButton } from './Popup.CancelButton';
import { PopupConfirmButton } from './Popup.ConfirmButton';
import { PopupMessage } from './Popup.Message';
import { PopupRoot } from './Popup.Root';
import { PopupTitle } from './Popup.Title';

export const Popup = Object.assign(PopupRoot, {
  CancelButton: PopupCancelButton,
  ConfirmButton: PopupConfirmButton,
  Message: PopupMessage,
  Title: PopupTitle,
});
