/// <reference types="react" />
export declare const Modal: (<Tag extends import("react").ElementType<any> = "div">(props: import("../../../types").RootUIProps<Tag, import("./Modal.Widget.Root").ModalRootRenderPropArg, "id" | "role" | "aria-labelledby" | "aria-modal"> & import("./Modal.Widget.Root").ModalRootProps, ref: import("react").Ref<HTMLDivElement>) => JSX.Element) & {
    displayName: string;
} & {
    Overlay: import("react").ForwardRefExoticComponent<import("./Modal.Overlay").ModalOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
    Backdrop: import("react").ForwardRefExoticComponent<import("./Modal.Backdrop").ModalBackdropProps & import("react").RefAttributes<HTMLDivElement>>;
    Panel: import("react").ForwardRefExoticComponent<import("./Modal.Panel").ModalPanelProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<import("./Modal.Header").ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<import("./Modal.Content").ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("./Modal.Footer").ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    Widgets: {
        Overlay: (<Tag_1 extends import("react").ElementType<any> = "div">(props: import("../../../types").RootUIProps<Tag_1, import("./Modal.Widget.Overlay").ModalOverlayRenderPropArg, "id" | "aria-hidden" | "onClick"> & import("./Modal.Widget.Overlay").ModalWidgetOverlayProps, ref: import("react").Ref<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
            displayName: string;
        };
        Backdrop: (<Tag_2 extends import("react").ElementType<any> = "div">(props: import("../../../types").RootUIProps<Tag_2, import("./Modal.Widget.Backdrop").ModalBackdropRenderPropArg, "id" | "aria-hidden"> & import("./Modal.Widget.Backdrop").ModalBackdropProps, ref: import("react").Ref<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
            displayName: string;
        };
        Panel: (<Tag_3 extends import("react").ElementType<any> = "div">(props: import("../../../types").RootUIProps<Tag_3, import("./Modal.Widget.Panel").ModalPanelRenderPropArg, "id" | "onClick"> & import("./Modal.Widget.Panel").ModalWidgetPanelProps, ref: import("react").Ref<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
            displayName: string;
        };
        Title: (<Tag_4 extends import("react").ElementType<any> = "h2">(props: Omit<import("../../../types").PropsOf<Tag_4>, "id" | ("children" | "className" | "as" | "refName")> & import("../../../types").RootUIOurProps<Tag_4, import("./Modal.Widget.Title").ModalTitleRenderPropArg> & (true extends (import("../../../types").PropsOf<Tag_4> extends infer T ? T extends import("../../../types").PropsOf<Tag_4> ? T extends never ? never : "className" extends infer T_1 ? T_1 extends "className" ? T_1 extends keyof T ? true : never : never : never : never : never) ? {
            className?: import("../../../types").PropsOf<Tag_4>["className"] | ((bag: import("./Modal.Widget.Title").ModalTitleRenderPropArg) => string) | undefined;
        } : import("../../../types").UnknownObject) & import("./Modal.Widget.Title").ModalTitleProps, ref: import("react").Ref<HTMLHeadingElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
            displayName: string;
        };
    };
};
