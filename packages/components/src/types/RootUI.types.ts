import * as React from 'react';

// A unique placeholder we can use as a default. This is nice because we can use this instead of
// defaulting to null / never / ... and possibly collide with actual data.
// Ideally we use a unique symbol here.
const RootUIUniqueKey = '1D45E01E-AF44-47C4-988A-19A94EBAF55C' as const;
export type RootUIUniqueKey = typeof RootUIUniqueKey;

export type RootUIReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

export type Expand<T> = T extends infer O ? Record<keyof O, O[keyof O]> : never;

export type UnknownObject = Record<number | string | symbol, unknown>;

type HasProperty<T extends UnknownObject, K extends PropertyKey> = T extends never
  ? never
  : K extends keyof T
    ? true
    : never;

export type PropsOf<Tag extends RootUIReactTag> = Tag extends React.ElementType ? React.ComponentProps<Tag> : never;

type PropsWeControl = 'as' | 'children' | 'className' | 'refName';

// Resolve the props of the component, but ensure to omit certain props that we control
type CleanProps<
  Tag extends RootUIReactTag,
  OmitableKeyProps extends PropertyKey = RootUIUniqueKey,
> = OmitableKeyProps extends RootUIUniqueKey
  ? Omit<PropsOf<Tag>, PropsWeControl>
  : Omit<PropsOf<Tag>, OmitableKeyProps | PropsWeControl>;

// Add certain props that we control
export interface RootUIOurProps<Tag extends RootUIReactTag, Slot> {
  as?: Tag;
  children?: ((bag: Slot) => React.ReactElement) | React.ReactNode;
  refName?: string;
}

// Conditionally override the `className`, to also allow for a function
// if and only if the PropsOf<Tag> already defines `className`.
// This will allow us to have a TS error on as={Fragment}
type ClassNameOverride<Tag extends RootUIReactTag, Slot = UnknownObject> =
  // Order is important here, because `never extends true` is `true`...
  true extends HasProperty<PropsOf<Tag>, 'className'>
    ? { className?: ((bag: Slot) => string) | PropsOf<Tag>['className'] }
    : UnknownObject;

// Provide clean TypeScript props, which exposes some of our custom API's.
export type RootUIProps<
  Tag extends RootUIReactTag,
  Slot = UnknownObject,
  OmitableKeyProps extends PropertyKey = RootUIUniqueKey,
> = CleanProps<Tag, OmitableKeyProps> & RootUIOurProps<Tag, Slot> & ClassNameOverride<Tag, Slot>;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends RootUIUniqueKey
  ? never
  : T extends RootUIUniqueKey
    ? U
    : U extends RootUIUniqueKey
      ? T
      : T | U extends UnknownObject
        ? (Without<T, U> & U) | (Without<U, T> & T)
        : T | U;

export type ByComparator<T> = ((a: T, b: T) => boolean) | (keyof T & string);

export type EnsureArray<T> = T extends any[] ? T : Expand<T>[];
