import * as React from 'react';
import { RootUIProps } from '~/types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface AccordionRootProps {
    defaultOpen?: boolean;
}
export interface AccordionRootRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>): void;
}
export declare const AccordionWidgetRoot: (<Tag extends React.ElementType<any> = (props: any) => React.ReactElement<any, any> | null>(props: Omit<import("~/types").PropsOf<Tag>, "children" | "className" | "as" | "refName"> & import("~/types").RootUIOurProps<Tag, AccordionRootRenderPropArg> & (true extends (import("~/types").PropsOf<Tag> extends infer T ? T extends import("~/types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("~/types").PropsOf<Tag>["className"] | ((bag: AccordionRootRenderPropArg) => string) | undefined;
} : import("~/types").UnknownObject) & AccordionRootProps & ElementProps, ref: React.Ref<Tag>) => JSX.Element) & {
    displayName: string;
};
export {};
