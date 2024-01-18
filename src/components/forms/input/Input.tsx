import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '~/system';

const CLASSNAME = 'Root__Input';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;
export interface InputProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Input = React.forwardRef<ElementType, InputProps>(({ className, ...others }, ref) => {
  const { intent, scale } = useRootUI({
    defaultIntent: 'primary',
    defaultScale: 'md',
    intent: others?.intent,
    scale: others?.scale,
  });

  return (
    <input
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'block w-full',
        'text-space-2 dark:text-cream-2',
        'bg-cream-1 dark:bg-space-1',
        'border border-cream-3 dark:border-space-3',
        'disabled:bg-neutral-1 disabled:border-neutral-4 disabled:placeholder:text-neutral-light',
        'px-4',
        'rounded',
        'caret-neutral',
        toScaleMatch({
          lg: () => 'scale-text-lg scale-py-lg',
          md: () => 'scale-text-md scale-py-md',
          sm: () => 'scale-text-sm scale-py-sm',
          xl: () => 'scale-text-xl scale-py-xl',
          xs: () => 'scale-text-xs scale-py-xs',
        })(scale),
        toIntentMatch({
          accent: () => clsx('outline-accent dark:outline-accent'),
          danger: () => clsx('outline-danger dark:outline-danger'),
          info: () => clsx('outline-info dark:outline-info'),
          neutral: () => clsx('outline-neutral dark:outline-neutral'),
          primary: () => clsx('outline-primary dark:outline-primary'),
          success: () => clsx('outline-success dark:outline-success'),
          warning: () => clsx('outline-warning dark:outline-warning'),
        })(intent),
      )}
      id={others.name}
      ref={ref}
    />
  );
});
