import * as React from 'react';

import { BaseSuspenseImage, BaseSuspenseImageProps } from './BaseSuspenseImage';
import { SuspenseImageProps } from './SuspenseImage.types';
import { SuspenseImageErrorBoundary } from './SuspenseImageErrorBoundary';

type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;

export const SuspenseImage = React.forwardRef<ElementType, ElementProps & SuspenseImageProps & BaseSuspenseImageProps>(
  ({ error = null, fallback = null, ...others }, ref) => {
    return (
      <SuspenseImageErrorBoundary error={error}>
        <React.Suspense fallback={fallback}>
          <BaseSuspenseImage {...others} ref={ref} />
        </React.Suspense>
      </SuspenseImageErrorBoundary>
    );
  },
);
