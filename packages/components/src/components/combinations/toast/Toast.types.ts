type VerticalPositionType = 'bottom' | 'top';
type HorizontalPositionType = 'left' | 'right';
export type ToastPlacementType = `${VerticalPositionType}-${HorizontalPositionType}`;

export interface ToastProps {
  /**
   * To render custom toast content
   */
  children?: React.ReactNode;

  /**
   * To notify icon
   */
  icon?: React.ReactElement;

  /**
   * To notify message
   */
  message?: string;

  /**
   * To notify title
   */
  title?: string;
}

export interface ToastUniqueProps extends ToastProps {
  id: number;

  visible: boolean;
}
