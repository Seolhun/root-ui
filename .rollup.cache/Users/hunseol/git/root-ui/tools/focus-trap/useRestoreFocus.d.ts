export interface UseRestoreFocusProps {
    ownerDocument: Document | null;
}
declare function useRestoreFocus({ ownerDocument }: UseRestoreFocusProps, enabled: boolean): void;
export { useRestoreFocus };
export default useRestoreFocus;
