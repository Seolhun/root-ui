export type RootNone = 'none';

export type RootIntentInherit = 'inherit';
export type RootIntent =
  | 'primary'
  | 'info'
  | 'success'
  | 'accent'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'neutral'
  | RootIntentInherit
  | RootNone;

export type RootScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | RootNone;

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
export type RootPlacement = Side | AlignedPlacement;
