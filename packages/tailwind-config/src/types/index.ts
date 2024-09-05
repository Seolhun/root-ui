export type RootScaleType = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
export type RootScaleMap = Record<RootScaleType, RootScaleType>;

export type RootIntentType =
  | 'accent' // "accent" is for highlighting feedback
  | 'danger' // "danger" is for error feedback
  | 'faint' // "faint" is lighter than neutral color
  | 'info' // "info" is for informative feedback
  | 'neutral' // "neutral" is for neutral(like gray) color
  | 'primary' // "primary" is the default intent
  | 'secondary' // "secondary" is for more lighten than primary
  | 'success' // "success" is for positive feedback
  | 'warning' // "warning" is for negative feedback
  | 'cream' // "cream" is for light theme background color
  | 'space'; // "space" is for dark theme background color
export type RootIntentMap = Record<RootIntentType, RootIntentType>;

export type RootIntentWeight = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type RootIntentRange = RootIntentType | `${RootIntentType}-${RootIntentWeight}`;
export type RootIntentWeightMap = {
  [key in RootIntentRange]: RootIntentRange;
};
