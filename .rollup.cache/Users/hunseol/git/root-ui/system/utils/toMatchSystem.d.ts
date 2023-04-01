import { RootInherit, RootScale, RootIntent } from '../theme';
export declare const toIntentMatch: import("@fxts/core/dist/types/types/Curry").default<(lookup: Partial<Record<RootIntent | RootInherit, () => string>>, key: RootIntent | RootInherit) => string>;
export declare const toScaleMatch: import("@fxts/core/dist/types/types/Curry").default<(lookup: Partial<Record<RootScale | RootInherit, () => string>>, key: RootScale | RootInherit) => string>;
