/// <reference types="react" />
export declare const Tooltip: (({ children, scale, ...options }: import("./Tooltip.Root").TooltipProps) => JSX.Element) & {
    Trigger: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<import("./Tooltip.Content").TooltipContentProps & import("react").RefAttributes<HTMLElement>>;
};
