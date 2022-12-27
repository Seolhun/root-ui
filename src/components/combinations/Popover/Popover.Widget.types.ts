export type PopoverFocusableElement =
  | HTMLElement
  | React.MutableRefObject<HTMLElement | null>
  | React.MouseEvent<HTMLElement>;

export interface PopoverRenderPropArg {
  open: boolean;
  close: (focusableElement?: PopoverFocusableElement) => void;
}
