import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toScaleMatch, toIntentMatch, useRootUIContext, useRootUI } from '~/system';

const CLASSNAME = 'Root__Input';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;
export interface InputProps extends ElementProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

export const Input = React.forwardRef<ElementType, InputProps>(({ className, ...others }, ref) => {
  const { scale, intent } = useRootUI({
    scale: others?.scale ?? 'md',
    intent: others?.intent ?? 'primary',
  });
  return (
    <input
      {...others}
      ref={ref}
      id={others.name}
      className={clsx(
        CLASSNAME,
        className,
        'block w-full',
        'bg-cream-1 text-space-1',
        'dark:bg-space-1 dark:text-cream-1',
        'border border-cream-3 dark:border-space-3',
        'disabled:bg-neutral-1 disabled:border-neutral-4 disabled:placeholder:text-neutral-light',
        'px-4',
        'rounded',
        'caret-neutral',
        toScaleMatch({
          xs: () => 'scale-text-xs scale-py-xs',
          sm: () => 'scale-text-sm scale-py-sm',
          md: () => 'scale-text-md scale-py-md',
          lg: () => 'scale-text-lg scale-py-lg',
          xl: () => 'scale-text-xl scale-py-xl',
        })(scale),
        toIntentMatch({
          neutral: () => clsx('outline-neutral dark:outline-neutral'),
          light: () => clsx('outline-light dark:outline-light'),
          dark: () => clsx('outline-dark dark:outline-dark'),
          primary: () => clsx('outline-primary dark:outline-primary'),
          info: () => clsx('outline-info dark:outline-info'),
          success: () => clsx('outline-success dark:outline-success'),
          accent: () => clsx('outline-accent dark:outline-accent'),
          warning: () => clsx('outline-warning dark:outline-warning'),
          danger: () => clsx('outline-danger dark:outline-danger'),
        })(intent),
      )}
    />
  );
});
