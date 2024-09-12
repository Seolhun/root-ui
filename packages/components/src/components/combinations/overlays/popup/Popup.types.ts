import * as React from 'react';

export type PopupRendererArgs = { popups: PopupValue[] };
export type PopupRenderer = (args: PopupRendererArgs) => React.ReactNode;

export interface PopupValue {
  /**
   * Unique identifier of the alert
   */
  id: string;
  /**
   * Title
   */
  title?: React.ReactNode;
  /**
   * Message
   */
  message: React.ReactNode;
  /**
   * @default 'Confirm'
   */
  confirmText?: string;
  /**
   * @default 'Cancel'
   */
  cancelText?: string;
  /**
   * On confirm callback
   */
  onConfirm?: () => void | (() => Promise<void>);
  /**
   * On cancel callback
   */
  onCancel?: () => void | (() => Promise<void>);
}

export type OpenPopupPayload = PopupValue;
export type OnOpenPopup = (payload: OpenPopupPayload) => Promise<boolean>;

export type ClosePopupPayload = PopupValue['id'];
export type OnClosePopup = (payload: ClosePopupPayload) => void;

export type OnResetPopup = () => void;
