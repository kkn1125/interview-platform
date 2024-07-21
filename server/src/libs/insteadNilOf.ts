import { isNil } from './isNil';

export function insteadNilOf<T>(value: T, replace: T): T {
  if (isNil(value)) return replace;
  return value;
}
