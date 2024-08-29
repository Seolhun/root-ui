import { ToastCloseButton } from './Toast.CloseButton';
import { ToastMessage } from './Toast.Message';
import { ToastRoot } from './Toast.Root';
import { ToastTitle } from './Toast.Title';

export const Toast = Object.assign(ToastRoot, {
  CloseButton: ToastCloseButton,
  Message: ToastMessage,
  Title: ToastTitle,
});
