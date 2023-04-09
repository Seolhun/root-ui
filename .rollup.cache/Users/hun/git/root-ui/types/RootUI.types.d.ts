import * as React from 'react';
declare const RootUIUniqueKey: "1D45E01E-AF44-47C4-988A-19A94EBAF55C";
export type RootUIUniqueKey = typeof RootUIUniqueKey;
export type RootUIReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
export type Expand<T> = T extends infer O ? Record<keyof O, O[keyof O]> : never;
export type UnknownObject = Record<string | number | symbol, unknown>;
type HasProperty<T extends UnknownObject, K extends PropertyKey> = T extends never ? never : K extends keyof T ? true : never;
export type PropsOf<Tag extends RootUIReactTag> = Tag extends React.ElementType ? React.ComponentProps<Tag> : never;
type PropsWeControl = 'as' | 'children' | 'refName' | 'className';
type CleanProps<Tag extends RootUIReactTag, OmitableKeyProps extends PropertyKey = RootUIUniqueKey> = OmitableKeyProps extends RootUIUniqueKey ? Omit<PropsOf<Tag>, PropsWeControl> : Omit<PropsOf<Tag>, OmitableKeyProps | PropsWeControl>;
export interface RootUIOurProps<Tag extends RootUIReactTag, Slot> {
    as?: Tag;
    children?: React.ReactNode | ((bag: Slot) => React.ReactElement);
    refName?: string;
}
type ClassNameOverride<Tag extends RootUIReactTag, Slot = UnknownObject> = true extends HasProperty<PropsOf<Tag>, 'className'> ? {
    className?: PropsOf<Tag>['className'] | ((bag: Slot) => string);
} : UnknownObject;
export type RootUIProps<Tag extends RootUIReactTag, Slot = UnknownObject, OmitableKeyProps extends PropertyKey = RootUIUniqueKey> = CleanProps<Tag, OmitableKeyProps> & RootUIOurProps<Tag, Slot> & ClassNameOverride<Tag, Slot>;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T | U extends RootUIUniqueKey ? never : T extends RootUIUniqueKey ? U : U extends RootUIUniqueKey ? T : T | U extends UnknownObject ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export type ByComparator<T> = (keyof T & string) | ((a: T, b: T) => boolean);
export type EnsureArray<T> = T extends any[] ? T : Expand<T>[];
export {};
