export function isEmpty(value: any): value is any[] {
  return Array.isArray(value) && value.length === 0;
}
