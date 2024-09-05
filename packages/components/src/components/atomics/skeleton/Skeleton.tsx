import { SkeletonLoader } from './Skeleton.Loader';
import { SkeletonRoot } from './Skeleton.Root';

export const Skeleton = Object.assign(SkeletonRoot, {
  Loader: SkeletonLoader,
});
