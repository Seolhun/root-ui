import clsx from 'clsx';
import * as React from 'react';

import { RootScale, toScaleMatch } from '../../../system';

const CLASSNAME = 'Root__Avatar';
type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;

export interface AvatarProps {
  /**
   * To handle image error when it has error.
   */
  emptySrc?: string;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const Avatar = React.forwardRef<ElementType, AvatarProps & ElementProps>(
  ({ className, alt = 'avatar', emptySrc, onError, scale = 'md', ...others }, ref) => {
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
          className={clsx(
            'rounded-full',
            toScaleMatch({
              lg: () => 'scale-lg',
              md: () => 'scale-md',
              sm: () => 'scale-sm',
              xl: () => 'scale-xl',
              xs: () => 'scale-xs',
            })(scale),
          )}
          alt={alt}
          onError={emptySrc ? undefined : onImageError}
          ref={ref}
        />
      </picture>
    );
  },
);
