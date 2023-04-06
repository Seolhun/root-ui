import * as React from 'react';
import { PropsForFeatures } from '../../../core';
import { RootUIProps } from '../../../types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface AccordionPanelProps {
}
export interface AccordionPanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;
declare const PanelRenderFeatures: number;
export declare const AccordionWidgetPanel: (<Tag extends React.ElementType<any> = "div">(props: Omit<import("../../../types").PropsOf<Tag>, "id" | ("children" | "className" | "as" | "refName")> & import("../../../types").RootUIOurProps<Tag, AccordionPanelRenderPropArg> & (true extends (import("../../../types").PropsOf<Tag> extends infer T ? T extends import("../../../types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("../../../types").PropsOf<Tag>["className"] | ((bag: AccordionPanelRenderPropArg) => string) | undefined;
} : import("../../../types").UnknownObject) & (({
    static?: undefined;
} & {
    unmount?: boolean | undefined;
}) | ({
    unmount?: undefined;
} & {
    static?: boolean | undefined;
})) & AccordionPanelProps & ElementProps, ref: React.Ref<ElementType>) => JSX.Element) & {
    displayName: string;
};
export {};
