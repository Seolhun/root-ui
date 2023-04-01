type Callback = (...args: any[]) => any;
export declare function disposables(): {
    enqueue(fn: Callback): void;
    addEventListener<TEventName extends keyof WindowEventMap>(element: HTMLElement, name: TEventName, listener: (event: WindowEventMap[TEventName]) => any, options?: boolean | AddEventListenerOptions): () => void;
    requestAnimationFrame(callback: FrameRequestCallback): () => void;
    nextFrame(callback: FrameRequestCallback): () => void;
    setTimeout(callback: (args: void) => void, ms?: number | undefined): () => void;
    add(cb: Callback): () => void;
    dispose(): void;
    workQueue(): Promise<void>;
};
export {};
