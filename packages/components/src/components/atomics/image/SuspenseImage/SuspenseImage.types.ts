import { ReactNode } from 'react';

export interface SuspenseImageProps {
  /**
   * 에러가 발생하였을 경우 보여줄 컴포넌트
   */
  error?: ReactNode;
  /**\
   * 이미지 로드동안 보여줄 컴포넌트
   */
  fallback?: ReactNode;
}

export interface SuspenseErrorBoundaryProps {
  children: ReactNode;
  error?: ReactNode;
}

export type SuspenseImageStatus = 'error' | 'loaded' | 'loading';

export interface SuspenseImageCacheValue {
  promise?: Promise<SuspenseImageStatus>;
  status: SuspenseImageStatus;
}
