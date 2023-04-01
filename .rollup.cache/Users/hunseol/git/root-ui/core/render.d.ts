import * as React from 'react';
import { RootUIProps, XOR, RootUIUniqueKey, Expand } from '../types';
export declare enum RenderFeatures {
    /** No features at all */
    None = 0,
    /**
     * When used, this will allow us to use one of the render strategies.
     *
     * **The render strategies are:**
     *    - **Unmount**   _(Will unmount the component.)_
     *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
     */
    RenderStrategy = 1,
    /**
     * When used, this will allow the user of our component to be in control. This can be used when
     * you want to transition based on some state.
     */
    Static = 2
}
export declare enum RootRenderStrategyEnum {
    Unmount = 0,
    Hidden = 1
}
type FeatureProps<PassedInFeatures extends RenderFeatures, ForFeature extends RenderFeatures, Props> = {
    [P in PassedInFeatures]: P extends ForFeature ? Props : RootUIUniqueKey;
}[PassedInFeatures];
export type PropsForFeatures<T extends RenderFeatures> = XOR<FeatureProps<T, RenderFeatures.Static, {
    static?: boolean;
}>, FeatureProps<T, RenderFeatures.RenderStrategy, {
    unmount?: boolean;
}>>;
interface RootRenderProps<Feature extends RenderFeatures, Tag extends React.ElementType, Slot> {
    ourProps: Expand<RootUIProps<Tag, Slot, any> & PropsForFeatures<Feature>>;
    theirProps: Expand<RootUIProps<Tag, Slot, any>>;
    defaultTag: React.ElementType;
    name: string;
    slot?: Slot;
    features?: Feature;
    /**
     * @default true
     */
    visible?: boolean;
}
export declare function render<Feature extends RenderFeatures, Tag extends React.ElementType, Slot>({ ourProps, theirProps, defaultTag, name, slot, features, visible, }: RootRenderProps<Feature, Tag, Slot>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
