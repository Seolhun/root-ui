/// <reference types="react" />
export declare const Modal: (<Tag extends import("react").ElementType<any> = "div">(props: import("../../../types").RootUIProps<Tag, import("./Widgets/Modal.Widget.Root").ModalRootRenderPropArg, "id" | "role" | "aria-labelledby" | "aria-modal"> & import("./Widgets").ModalProps, ref: import("react").Ref<HTMLDivElement>) => JSX.Element) & {
    displayName: string;
} & {
    Overlay: import("react").ForwardRefExoticComponent<import("./Modal.Overlay").ModalOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
    Backdrop: import("react").ForwardRefExoticComponent<import("./Modal.Backdrop").ModalBackdropProps & import("react").RefAttributes<HTMLDivElement>>;
    Panel: import("react").ForwardRefExoticComponent<import("./Modal.Panel").ModalPanelProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<import("./Modal.Header").ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<import("./Modal.Content").ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("./Modal.Footer").ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
