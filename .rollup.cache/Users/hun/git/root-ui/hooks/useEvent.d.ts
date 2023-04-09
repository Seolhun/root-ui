type EventCallback = <Arg = any, Res = any>(...args: Arg[]) => Res;
export declare function useEvent<F extends EventCallback, P extends Parameters<F> = Parameters<F>, R = ReturnType<F>>(cb: (...args: P) => R): (...args: P) => R;
export {};
