/// <reference types="react" />
export declare const Accordion: (<Tag extends import("react").ElementType<any> = (props: any) => import("react").ReactElement<any, any> | null>(props: Omit<import("../../../types").PropsOf<Tag>, "children" | "className" | "as" | "refName"> & import("../../../types").RootUIOurProps<Tag, import("./Accordion.Widget.Root").AccordionRootRenderPropArg> & (true extends (import("../../../types").PropsOf<Tag> extends infer T ? T extends import("../../../types").PropsOf<Tag> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
    className?: import("../../../types").PropsOf<Tag>["className"] | ((bag: import("./Accordion.Widget.Root").AccordionRootRenderPropArg) => string) | undefined;
} : import("../../../types").UnknownObject) & import("./Accordion.Widget.Root").AccordionRootProps & import("react").HTMLAttributes<HTMLDivElement>, ref: import("react").Ref<Tag>) => JSX.Element) & {
    displayName: string;
} & {
    Widgets: {
        Button: (<Tag_1 extends import("react").ElementType<any> = "button">(props: import("../../../types").RootUIProps<Tag_1, import("./Accordion.Widget.Button").AccordionButtonRenderPropArg, "id" | "aria-controls" | "aria-expanded" | "onKeyDown" | "onClick" | "type"> & import("./Accordion.Widget.Button").AccordionButtonProps & import("react").ButtonHTMLAttributes<HTMLButtonElement>, ref: import("react").Ref<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
            displayName: string;
        };
        Panel: (<Tag_2 extends import("react").ElementType<any> = "div">(props: Omit<import("../../../types").PropsOf<Tag_2>, "id" | ("children" | "className" | "as" | "refName")> & import("../../../types").RootUIOurProps<Tag_2, import("./Accordion.Widget.Panel").AccordionPanelRenderPropArg> & (true extends (import("../../../types").PropsOf<Tag_2> extends infer T_2 ? T_2 extends import("../../../types").PropsOf<Tag_2> ? T_2 extends never ? never : "className" extends infer T_3 ? T_3 extends "className" ? T_3 extends keyof T_2 ? true : never : never : never : never : never) ? {
            className?: import("../../../types").PropsOf<Tag_2>["className"] | ((bag: import("./Accordion.Widget.Panel").AccordionPanelRenderPropArg) => string) | undefined;
        } : import("../../../types").UnknownObject) & (({
            static?: undefined;
        } & {
            unmount?: boolean | undefined;
        }) | ({
            unmount?: undefined;
        } & {
            static?: boolean | undefined;
        })) & import("./Accordion.Widget.Panel").AccordionPanelProps & import("react").HTMLAttributes<HTMLDivElement>, ref: import("react").Ref<HTMLDivElement>) => JSX.Element) & {
            displayName: string;
        };
    };
};
