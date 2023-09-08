import * as OutlineHeroIcon from '@heroicons/react/24/outline';
import * as SolidHeroIcon from '@heroicons/react/24/solid';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntent, RootIntentInherit, RootScale, toIntentMatch, toScaleMatch, useRootUI } from '~/system';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface IconProps extends ElementProps {
  /**
   * Icon name
   */
  icon: keyof typeof OutlineHeroIcon | keyof typeof SolidHeroIcon;

  /**
   * @default inherit
   */
  intent?: RootIntent | RootIntentInherit;

  /**
   * Set this to change scale
   * @default inherit
   */
  scale?: RootScale;

  /**
   * Outlined icons
   * @default outline
   */
  variant?: 'outline' | 'solid';
}

export const Icon = React.forwardRef<ElementType, IconProps>(
  ({ className, icon, variant = 'outline', ...others }, ref) => {
    const { intent, scale } = useRootUI({
      defaultIntent: 'inherit',
      defaultScale: 'md',
      intent: others?.intent,
      scale: others?.scale,
    });

    const Component = React.useMemo(() => {
      return variant === 'outline' ? OutlineHeroIcon[icon] : SolidHeroIcon[icon];
    }, [variant, icon]);

    return (
      <i
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center justify-center',
          toScaleMatch({
            lg: () => 'scale-lg',
            md: () => 'scale-md',
            sm: () => 'scale-sm',
            xl: () => 'scale-xl',
            xs: () => 'scale-xs',
          })(scale),
          toIntentMatch({
            accent: () => 'text-accent dark:text-accent2',
            danger: () => 'text-danger dark:text-danger2',
            dark: () => 'text-dark dark:text-dark2',
            info: () => 'text-info dark:text-info2',
            light: () => 'text-light dark:text-light2',
            neutral: () => 'text-neutral dark:text-neutral2',
            primary: () => 'text-primary dark:text-primary2',
            success: () => 'text-success dark:text-success2',
            warning: () => 'text-warning dark:text-warning2',
          })(intent),
        )}
        ref={ref}
      >
        <Component className="w-full" />
      </i>
    );
  },
);
