import * as React from 'react';
import { RootUIProps } from '~/types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface BoxProps {
    /**
     * Set RootScale className
     */
    scaleClassName?: string;
    /**
     * Set RootIntent className
     */
    intentClassName?: string;
}
export interface BoxRenderPropArg {
}
type PropsWeControl = keyof Pick<ElementProps, 'id'>;
export declare const Box: (<Tag extends keyof JSX.IntrinsicElements = "div">({ scaleClassName, intentClassName, className, ...others }: Omit<import("~/types").PropsOf<Tag>, "id" | ("children" | "className" | "as" | "refName")> & import("~/types").RootUIOurProps<Tag, BoxRenderPropArg> & (true extends (import("~/types").PropsOf<Tag> extends infer T ? T extends import("~/types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("~/types").PropsOf<Tag>["className"] | ((bag: BoxRenderPropArg) => string) | undefined;
} : import("~/types").UnknownObject) & BoxProps & JSX.IntrinsicElements[Tag], ref: React.Ref<ElementType>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export {};
