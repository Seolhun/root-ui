import * as React from 'react';
import { RootUIProps } from '../../types';
export interface FocusTrapProps {
    initialFocus?: React.MutableRefObject<HTMLElement | null>;
    features?: Features;
    containers?: React.MutableRefObject<Set<React.MutableRefObject<HTMLElement | null>>>;
}
declare enum Features {
    /** No features enabled for the focus trap. */
    None = 1,
    /** Ensure that we move focus initially into the container. */
    InitialFocus = 2,
    /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */
    TabLock = 4,
    /** Ensure that programmatically moving focus outside of the container is disallowed. */
    FocusLock = 8,
    /** Ensure that we restore the focus when unmounting the focus trap. */
    RestoreFocus = 16,
    /** Enable all features. */
    All = 30
}
export declare const FocusTrap: (<Tag extends React.ElementType<any> = "div">({ initialFocus, containers, features, ...theirProps }: Omit<import("../../types").PropsOf<Tag>, "children" | "className" | "as" | "refName"> & import("../../types").RootUIOurProps<Tag, import("../../types").UnknownObject> & (true extends (import("../../types").PropsOf<Tag> extends infer T ? T extends import("../../types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("../../types").PropsOf<Tag>["className"] | ((bag: import("../../types").UnknownObject) => string) | undefined;
} : import("../../types").UnknownObject) & FocusTrapProps, ref: React.Ref<HTMLDivElement>) => JSX.Element) & {
    displayName: string;
} & {
    features: typeof Features;
};
export {};
