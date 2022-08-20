/**
 * @see https://tailwindcss.com/docs/text-color
 * @see https://tailwindcss.com/docs/background-color
 * @see https://tailwindcss.com/docs/ring-color
 */
export type TailwindPrefix = 'text' | 'bg' | 'border' | 'ring' | 'ring-offset' | 'outline' | 'fill';

export type IntentType = 'light' | 'dark' | 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'danger';

/**
 * @see https://tailwindcss.com/docs/customizing-colors
 * 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
 */
export type IntentWeightType = number;

/**
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states
 */
export type TailwindStateOption = 'hover' | 'focus';
// | 'first-child'
// | 'required'
// | 'before'
// | 'after'
// | 'placeholder'
// | 'selection';
