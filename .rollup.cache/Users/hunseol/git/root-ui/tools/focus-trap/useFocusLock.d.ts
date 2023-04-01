/// <reference types="react" />
export interface UseFocusLockProps {
    ownerDocument: Document | null;
    container: React.MutableRefObject<HTMLElement | null>;
    containers?: React.MutableRefObject<Set<React.MutableRefObject<HTMLElement | null>>>;
    previousActiveElement: React.MutableRefObject<HTMLElement | null>;
}
declare function useFocusLock({ ownerDocument, container, containers, previousActiveElement }: UseFocusLockProps, enabled: boolean): void;
export { useFocusLock };
export default useFocusLock;
