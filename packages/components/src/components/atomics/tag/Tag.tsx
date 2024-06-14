import { RootIntentType, RootScaleType } from '@seolhun/root-tailwind-config';
import clsx from 'clsx';
import * as React from 'react';

import { toIntentMatch, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Tag';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface TagProps extends ElementProps {
  /**
   * @default primary
   */
  intent?: RootIntentType;

  /**
   * Use outline style
   */
  outlined?: boolean;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScaleType;
}

export const Tag = React.forwardRef<ElementType, TagProps>(
  ({ className, children, intent = 'primary', outlined, scale = 'md', ...others }, ref) => {
    return (
      <button
        role="button"
        tabIndex={0}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'tag',
          toScaleMatch({
            lg: () => 'tag-scale-lg',
            md: () => 'tag-scale-md',
            sm: () => 'tag-scale-sm',
            xl: () => 'tag-scale-xl',
            xs: () => 'tag-scale-xs',
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
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
