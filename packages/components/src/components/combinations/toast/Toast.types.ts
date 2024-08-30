type VerticalPositionType = 'bottom' | 'top';
type HorizontalPositionType = 'left' | 'right';
export type ToastPlacementType = `${VerticalPositionType}-${HorizontalPositionType}`;

export interface ToastValue {
  /**
   * Unique identifier of the toast
   */
  id: number;
  /**
   * To notify message
   */
  message?: string;
  /**
   * Timeout of the toast
   * @default 3000
   */
  timeout?: number;
  /**
   * To notify title
   */
  title?: string;
  /**
   * Visibility of the toast
   */
  visible: boolean;
}

export type OpenToastPayload = Pick<ToastValue, 'message'> & Partial<Pick<ToastValue, 'timeout' | 'title'>>;

export type CloseToastPayload = ToastValue['id'];
