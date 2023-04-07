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
  | 'neutral';

export type RootScaleNone = 'none';
export type RootScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
export type RootPlacement = Side | AlignedPlacement;
