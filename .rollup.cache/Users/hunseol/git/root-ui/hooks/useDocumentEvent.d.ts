export declare function useDocumentEvent<K extends keyof DocumentEventMap>(type: K, callback: (event: DocumentEventMap[K]) => void, options?: boolean | AddEventListenerOptions): void;
