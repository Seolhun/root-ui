/**
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
 */
export type TailwindPrefix =
  | 'text'
  | 'bg'
  | 'border'
  | 'ring'
  | 'ring-offset'
  | 'outline'
  | 'fill'
  | 'accent'
  | 'caret';

/**
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
 */
export type TailwindAppendix =
  | 'hover'
  | 'focus'
  | 'focus-within'
  | 'focus-visible'
  | 'active'
  | 'visited'
  | 'disabled'
  | 'checked'
  | 'required'
  | 'placeholder';

export type RootIntentType = 'light' | 'dark' | 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'danger';

/**
 * @see https://tailwindcss.com/docs/customizing-colors
 * 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
 */
export type RootIntentWeightType = number;

export type RootScale = 'sm' | 'md' | 'lg';
