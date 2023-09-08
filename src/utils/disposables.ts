type Callback = (...args: any[]) => any;

export function disposables() {
  const disposables: Callback[] = [];
  const queue: Callback[] = [];

  const api = {
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

    addEventListener<TEventName extends keyof WindowEventMap>(
      element: HTMLElement,
      name: TEventName,
      listener: (event: WindowEventMap[TEventName]) => any,
      options?: AddEventListenerOptions | boolean,
    ) {
      element.addEventListener(name, listener as any, options);
      return api.add(() => element.removeEventListener(name, listener as any, options));
    },

    dispose() {
      for (const dispose of disposables.splice(0)) {
        dispose();
      }
    },

    enqueue(fn: Callback) {
      queue.push(fn);
    },

    nextFrame(...args: Parameters<typeof requestAnimationFrame>) {
      return api.requestAnimationFrame(() => {
        return api.requestAnimationFrame(...args);
      });
    },

    requestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
      const raf = requestAnimationFrame(...args);
      return api.add(() => cancelAnimationFrame(raf));
    },

    setTimeout(...args: Parameters<typeof setTimeout>) {
      const timer = setTimeout(...args);
      return api.add(() => clearTimeout(timer));
    },

    async workQueue() {
      for (const handle of queue.splice(0)) {
        await handle();
      }
    },
  };

  return api;
}
