import { Popup } from './Popup';
import { PopupGroupBackdrop } from './PopupGroup.Backdrop';
import { PopupGroupOverlay } from './PopupGroup.Overlay';
import { PopupGroupPanel } from './PopupGroup.Panel';
import { PopupGroupRoot } from './PopupGroup.Root';

/**
 * - Overlay
 *   - Backdrop
 *   - Panel
 *     - Popup
 */
export const PopupGroup = Object.assign(PopupGroupRoot, {
  Backdrop: PopupGroupBackdrop,
  Overlay: PopupGroupOverlay,
  Panel: PopupGroupPanel,
  Popup: Popup,
});
