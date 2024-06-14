import { RootIntentType, RootScaleType } from '@seolhun/root-tailwind-config';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch, toScaleMatch } from '../../system';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface IconButtonProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntentType;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;

  /**
   * Outlined icons
   * @default outline
   */
  variant?: 'outline' | 'solid';
}

export const IconButton = React.forwardRef<ElementType, IconButtonProps>(
  ({ className, children, intent = 'primary', scale = 'md', variant = 'outline', ...others }, ref) => {
    const outlined = variant === 'outline';
    return (
      <button
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center justify-center',
          'rounded-full',
          toScaleMatch({
            lg: () => 'scale-lg p-3',
            md: () => 'scale-md p-2',
            sm: () => 'scale-sm p-2',
            xl: () => 'scale-xl p-4',
            xs: () => 'scale-xs p-2',
          })(scale),
          toIntentMatch({
            accent: () => clsx(outlined ? `outlined-accent` : `solid-accent`),
            danger: () => clsx(outlined ? `outlined-danger` : `solid-danger`),
            info: () => clsx(outlined ? `outlined-info` : `solid-info`),
            neutral: () => clsx(outlined ? `outlined-neutral` : `solid-neutral`),
            primary: () => clsx(outlined ? `outlined-primary` : `solid-primary`),
            success: () => clsx(outlined ? `outlined-success` : `solid-success`),
            warning: () => clsx(outlined ? `outlined-warning` : `solid-warning`),
          })(intent),
        )}
        aria-label="icon button"
        ref={ref}
        role="button"
        type="button"
        {...others}
      >
        {children}
      </button>
    );
  },
);
