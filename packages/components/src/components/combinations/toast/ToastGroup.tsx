import { ToastCloseButton } from './Toast.CloseButton';
import { ToastMessage } from './Toast.Message';
import { ToastRoot } from './Toast.Root';
import { ToastTitle } from './Toast.Title';
import { ToastGroupPanel } from './ToastGroup.Panel';
import { ToastProvider } from './ToastProvider';

const Toast = Object.assign(ToastRoot, {
  CloseButton: ToastCloseButton,
  Message: ToastMessage,
  Title: ToastTitle,
});

export const ToastGroup = Object.assign(ToastProvider, {
  Panel: ToastGroupPanel,
  Toast,
});
