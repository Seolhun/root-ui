import * as React from 'react';
export interface UsePortalProps<TargetElement extends HTMLElement = HTMLElement> {
    show: boolean;
    children: React.ReactNode;
    targetElement: TargetElement;
}
export declare function usePortal({ children, show, targetElement }: UsePortalProps): React.ReactPortal | null;
