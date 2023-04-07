import clsx from 'clsx';
import React from 'react';

import { RootScale, toScaleMatch } from '~/system';

const CLASSNAME = 'Root__Avatar';
type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;

export interface AvatarProps {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * To handle image error when it has error.
   */
  emptySrc?: string;
}

export const Avatar = React.forwardRef<ElementType, AvatarProps & ElementProps>(
  ({ className, scale = 'md', alt = 'avatar', onError, emptySrc, ...others }, ref) => {
    const onImageError = React.useCallback(
      (e: React.UIEvent<ElementType>) => {
        onError?.(e);
        if (emptySrc) {
          e.currentTarget.onerror = null;
          e.currentTarget.src = emptySrc;
        }
      },
      [onError, emptySrc],
    );

    return (
      <picture className={clsx(CLASSNAME, className, 'inline-block')}>
        <img
          {...others}
          ref={ref}
          className={clsx(
            'rounded-full',
            toScaleMatch({
              xs: () => 'scale-xs',
              sm: () => 'scale-sm',
              md: () => 'scale-md',
              lg: () => 'scale-lg',
              xl: () => 'scale-xl',
            })(scale),
          )}
          alt={alt}
          onError={emptySrc ? undefined : onImageError}
        />
      </picture>
    );
  },
);
