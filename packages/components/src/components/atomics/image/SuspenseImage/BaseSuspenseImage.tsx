import * as React from 'react';

import { Image } from '../Image';
import { useSuspenseImage } from './useSuspensePreloadImage';

type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;

export interface BaseSuspenseImageProps extends ElementProps {}

export const BaseSuspenseImage = React.forwardRef<ElementType, BaseSuspenseImageProps>(
  ({ alt, src, ...others }, ref) => {
    useSuspenseImage(src || '');

    return <Image {...others} alt={alt} ref={ref} src={src} />;
  },
);
