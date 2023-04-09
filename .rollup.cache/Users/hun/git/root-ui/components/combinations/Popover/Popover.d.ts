/// <reference types="react" />
export declare const Popover: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLElement>, "children"> & import("./Popover.Root").PopoverProps & import("react").RefAttributes<HTMLElement>> & {
    /**
     * Group is a special case because it needs to be able to render multiple popover
     */
    Group: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./Popover.Group").PopoverGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    Overlay: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./Popover.Overlay").PopoverOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
    Button: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("./Popover.Button").PopoverButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Panel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLDivElement>, "children"> & import("./Popover.Panel").PopoverPanelProps & import("react").RefAttributes<HTMLDivElement>>;
};
