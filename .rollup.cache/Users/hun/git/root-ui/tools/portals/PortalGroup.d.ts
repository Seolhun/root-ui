import * as React from 'react';
import { RootUIProps, UnknownObject } from '~/types';
type PortalGroupRenderPropArg = UnknownObject;
export declare const PortalGroupContext: React.Context<React.MutableRefObject<HTMLElement | null> | null>;
export declare const PortalGroup: (<Tag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>>(props: Omit<import("~/types").PropsOf<Tag>, "children" | "className" | "as" | "refName"> & import("~/types").RootUIOurProps<Tag, UnknownObject> & (true extends (import("~/types").PropsOf<Tag> extends infer T ? T extends import("~/types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("~/types").PropsOf<Tag>["className"] | ((bag: UnknownObject) => string) | undefined;
} : UnknownObject) & {
    target: React.MutableRefObject<HTMLElement | null>;
}, ref: React.Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
};
export {};
