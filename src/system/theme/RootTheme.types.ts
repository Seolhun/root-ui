export type RootNone = 'none';

export type RootIntentInherit = 'inherit';
export type RootIntent =
  | 'accent'
  | 'danger'
  | 'dark'
  | 'info'
  | 'light'
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning'
  | RootIntentInherit
  | RootNone;

export type RootScale = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | RootNone;

type Alignment = 'end' | 'start';
type Side = 'bottom' | 'left' | 'right' | 'top';
type AlignedPlacement = `${Side}-${Alignment}`;
export type RootPlacement = AlignedPlacement | Side;
