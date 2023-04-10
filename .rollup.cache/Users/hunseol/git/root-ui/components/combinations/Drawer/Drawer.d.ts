/// <reference types="react" />
export declare const Drawer: (({ children, show, onClose, onConfirm, placement, root, ...others }: import("./Drawer.Root").DrawerProps) => JSX.Element) & {
    Panel: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./Drawer.Panel").DrawerPanelProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<import("./Drawer.Header").DrawerHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<import("./Drawer.Body").DrawerBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("./Drawer.Footer").DrawerFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
