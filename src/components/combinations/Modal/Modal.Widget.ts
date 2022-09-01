import ModalWidgetRoot from './Modal.Widget.Root';
import ModalWidgetOverlay from './Modal.Widget.Overlay';
import ModalWidgetBackdrop from './Modal.Widget.Backdrop';
import ModalWidgetPanel from './Modal.Widget.Panel';
import ModalWidgetTitle from './Modal.Widget.Title';

const ModalWidget = Object.assign(ModalWidgetRoot, {
  Overlay: ModalWidgetOverlay,
  Backdrop: ModalWidgetBackdrop,
  Panel: ModalWidgetPanel,
  Title: ModalWidgetTitle,
});

export { ModalWidget };
export default ModalWidget;
