function isEmpty(value: any): value is any[] {
  return Array.isArray(value) && value.length === 0;
}

export { isEmpty };
export default isEmpty;
