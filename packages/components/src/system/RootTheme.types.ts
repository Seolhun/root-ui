type Alignment = 'end' | 'start';
type Side = 'bottom' | 'left' | 'right' | 'top';
type AlignedPlacement = `${Side}-${Alignment}`;
export type RootPlacement = AlignedPlacement | Side;
