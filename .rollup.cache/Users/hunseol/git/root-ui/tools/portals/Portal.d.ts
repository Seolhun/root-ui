import * as React from 'react';
import { RootUIProps } from '~/types';
export interface PortalRenderPropArg {
    root?: HTMLElement | null;
}
export declare const Portal: (<Tag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>>(props: RootUIProps<Tag, PortalRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: React.Ref<HTMLElement>) => JSX.Element | null) & {
    displayName: string;
} & {
    Group: (<Tag_1 extends React.ElementType<any> = React.ExoticComponent<{
        children?: React.ReactNode;
    }>>(props: Omit<import("~/types").PropsOf<Tag_1>, "children" | "className" | "as" | "refName"> & import("~/types").RootUIOurProps<Tag_1, import("~/types").UnknownObject> & (true extends (import("~/types").PropsOf<Tag_1> extends infer T ? T extends import("~/types").PropsOf<Tag_1> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
        className?: import("~/types").PropsOf<Tag_1>["className"] | ((bag: import("~/types").UnknownObject) => string) | undefined;
    } : import("~/types").UnknownObject) & {
        target: React.MutableRefObject<HTMLElement | null>;
    }, ref: React.Ref<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
};
