export declare function useWindowEvent<EventType extends keyof WindowEventMap>(type: EventType, listener: (ev: WindowEventMap[EventType]) => any, options?: boolean | AddEventListenerOptions): void;
