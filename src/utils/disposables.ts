type Callback = (...args: any[]) => any;

export function disposables() {
  const disposables: Callback[] = [];
  const queue: Callback[] = [];

  const api = {
    enqueue(fn: Callback) {
      queue.push(fn);
    },

    addEventListener<TEventName extends keyof WindowEventMap>(
      element: HTMLElement,
      name: TEventName,
      listener: (event: WindowEventMap[TEventName]) => any,
      options?: boolean | AddEventListenerOptions,
    ) {
      element.addEventListener(name, listener as any, options);
      return api.add(() => element.removeEventListener(name, listener as any, options));
    },

    requestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
      const raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },

    nextFrame(...args: Parameters<typeof requestAnimationFrame>) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },

    setTimeout(...args: Parameters<typeof setTimeout>) {
      const timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },

    add(cb: Callback) {
      disposables.push(cb);
      return () => {
        const idx = disposables.indexOf(cb);
        if (idx >= 0) {
          const [dispose] = disposables.splice(idx, 1);
          dispose();
        }
      };
    },

    dispose() {
      for (const dispose of disposables.splice(0)) {
        dispose();
      }
    },

    async workQueue() {
      for (const handle of queue.splice(0)) {
        await handle();
      }
    },
  };

  return api;
}
