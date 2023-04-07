import { RootIntentInherit, RootScale, RootIntent, RootScaleNone } from '../theme';
export declare const toIntentMatch: import("@fxts/core/dist/types/types/Curry").default<(lookup: Partial<Record<RootIntent | RootIntentInherit, () => string>>, key: RootIntent | RootIntentInherit) => string>;
export declare const toScaleMatch: import("@fxts/core/dist/types/types/Curry").default<(lookup: Partial<Record<RootScale | RootScaleNone, () => string>>, key: RootScale | RootScaleNone) => string>;
