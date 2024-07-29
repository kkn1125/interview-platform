export function join<T, S>(array: (T | S)[], separator: S) {
  const copy = [...array];
  const temp = [];
  while (copy.length > 1) temp.push(copy.shift(), separator);
  temp.push(copy.shift());
  return temp;
}
