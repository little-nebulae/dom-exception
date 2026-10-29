export function isDOMException(value: unknown): value is DOMException {
  return value instanceof DOMException;
}
