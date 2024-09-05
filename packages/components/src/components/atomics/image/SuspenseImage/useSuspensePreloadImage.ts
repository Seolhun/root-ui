import { suspenseImageCache } from './SuspenseImage.const';

export function useSuspenseImage(src: string) {
  if (!suspenseImageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        suspenseImageCache.add(src);
        resolve(null);
      };
      img.onerror = () => {
        suspenseImageCache.add(src);
      };
    });
  }
}
