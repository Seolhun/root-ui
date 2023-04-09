import * as React from 'react';
interface ForcePortalRootProps {
    children: React.ReactNode;
    force: boolean;
}
export declare function ForcePortalRoot({ children, force }: ForcePortalRootProps): JSX.Element;
export declare function useForcePortalRoot(): boolean;
export {};
