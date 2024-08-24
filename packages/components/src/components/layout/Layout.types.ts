/**
 * - `collapsed`: Sidebar is collapsed and only icons are visible.
 * - `expanded`: Sidebar is expanded and icons and text are visible.
 * - `hidden`: Sidebar is hidden.
 */
export type LayoutSidebarStatus = 'collapsed' | 'expanded' | 'hidden';

export interface LayoutContextValues {
  setSidebarStatus: React.Dispatch<React.SetStateAction<LayoutSidebarStatus>>;
  /**
   * Sidebar size pixels in 'expanded' status.
   * @default 132
   */
  sidebarSize: number;
  sidebarStatus: LayoutSidebarStatus;
}
