declare function compact<T extends Record<any, any>>(object: T, predicate?: (v: any) => boolean): {} & T;
export { compact };
export default compact;
