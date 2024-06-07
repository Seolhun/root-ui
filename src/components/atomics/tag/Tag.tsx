import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '../../../system';

const CLASSNAME = 'Root__Tag';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface TagProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntent;

  /**
   * Use outline style
   */
  outlined?: boolean;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Tag = React.forwardRef<ElementType, TagProps>(({ children, className, outlined, ...others }, ref) => {
  const { intent, scale } = useRootUI({
    defaultIntent: 'primary',
    defaultScale: 'md',
    intent: others?.intent,
    scale: others?.scale,
  });

  return (
    <button
      role="button"
      tabIndex={0}
      {...others}
      className={clsx(
        CLASSNAME,
        className,
        'flex items-center justify-center',
        'rounded-full',
        'cursor-pointer',
        'disabled:cursor-not-allowed',
        toScaleMatch({
          lg: () => 'scale-text-lg scale-p-lg',
          md: () => 'scale-text-md scale-p-md',
          sm: () => 'scale-text-sm scale-p-sm',
          xl: () => 'scale-text-xl scale-p-xl',
          xs: () => 'scale-text-xs scale-p-xs',
        })(scale),
        toIntentMatch({
          accent: () => clsx(outlined ? 'outlined-accent' : 'solid-accent'),
          danger: () => clsx(outlined ? 'outlined-danger' : 'solid-danger'),
          info: () => clsx(outlined ? 'outlined-info' : 'solid-info'),
          neutral: () => clsx(outlined ? 'outlined-neutral' : 'solid-neutral'),
          primary: () => clsx(outlined ? 'outlined-primary' : 'solid-primary'),
          success: () => clsx(outlined ? 'outlined-success' : 'solid-success'),
          warning: () => clsx(outlined ? 'outlined-warning' : 'solid-warning'),
        })(intent),
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});
