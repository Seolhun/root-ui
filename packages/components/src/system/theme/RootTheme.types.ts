export type RootIntent = 'accent' | 'danger' | 'info' | 'neutral' | 'primary' | 'success' | 'warning';

export type RootScale = 'lg' | 'md' | 'sm' | 'xl' | 'xs';

type Alignment = 'end' | 'start';
type Side = 'bottom' | 'left' | 'right' | 'top';
type AlignedPlacement = `${Side}-${Alignment}`;
export type RootPlacement = AlignedPlacement | Side;
