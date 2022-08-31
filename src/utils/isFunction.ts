const isFunction = (fn: any): fn is (...args: any[]) => void => {
  return typeof fn === 'function';
};

export { isFunction };
export default isFunction;
