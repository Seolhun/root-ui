import { RootUIContextValues } from './RootUI.Context';
export interface UseRootUIProps extends RootUIContextValues {
}
export declare function useRootUI({ intent, scale }?: Partial<UseRootUIProps>): {
    scale: import("./RootTheme.types").RootScale | undefined;
    intent: import("./RootTheme.types").RootIntent | undefined;
};
