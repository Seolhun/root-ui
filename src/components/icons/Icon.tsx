import * as OutlineHeroIcon from '@heroicons/react/24/outline';
import * as SolidHeroIcon from '@heroicons/react/24/solid';
import clsx from 'clsx';
import * as React from 'react';

import { RootIntentInherit, RootIntent, RootScale, toIntentMatch, toScaleMatch, useRootUIContext } from '~/system';

import { Box } from '../common';

const CLASSNAME = 'Root__Icon';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface IconProps extends ElementProps {
  /**
   * Icon name
   */
  icon: keyof typeof SolidHeroIcon | keyof typeof OutlineHeroIcon;

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
   */
  outlined?: boolean;
}

export const Icon = React.forwardRef<ElementType, IconProps>(
  ({ className, icon, intent = 'inherit', scale = 'md', outlined, ...others }, ref) => {
    const rootUIContext = useRootUIContext();

    const Component = React.useMemo(() => {
      return outlined ? OutlineHeroIcon[icon] : SolidHeroIcon[icon];
    }, [outlined, icon]);

    return (
      <Box
        {...others}
        ref={ref}
        as="i"
        scaleClassName={toScaleMatch({
          xs: () => 'scale-xs',
          sm: () => 'scale-sm',
          md: () => 'scale-md',
          lg: () => 'scale-lg',
          xl: () => 'scale-xl',
        })(scale)}
        intentClassName={toIntentMatch({
          neutral: () => 'text-neutral',
          light: () => 'text-light',
          dark: () => 'text-dark',
          primary: () => 'text-primary',
          info: () => 'text-info',
          success: () => 'text-success',
          accent: () => 'text-accent',
          warning: () => 'text-warning',
          danger: () => 'text-danger',
        })(intent)}
        className={clsx(CLASSNAME, className, 'inline-flex items-center justify-center')}
      >
        <Component className="w-full" />
      </Box>
    );
  },
);
