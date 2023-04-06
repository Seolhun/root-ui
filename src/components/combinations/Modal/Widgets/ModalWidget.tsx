import { ModalWidgetBackdrop } from './Modal.Widget.Backdrop';
import { ModalWidgetOverlay } from './Modal.Widget.Overlay';
import { ModalWidgetPanel } from './Modal.Widget.Panel';
import { ModalWidgetRoot } from './Modal.Widget.Root';
import { ModalWidgetTitle } from './Modal.Widget.Title';

export const ModalWidget = Object.assign(ModalWidgetRoot, {
  Overlay: ModalWidgetOverlay,
  Backdrop: ModalWidgetBackdrop,
  Panel: ModalWidgetPanel,
  Title: ModalWidgetTitle,
});
