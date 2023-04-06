export declare function useWatch<Dependencies extends any[]>(cb: (newValues: [...Dependencies], oldValues: [...Dependencies]) => void | (() => void), dependencies: [...Dependencies]): void;
