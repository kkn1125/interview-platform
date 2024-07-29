export function sliceGroup<T = any>(array: T[], group: number) {
  const copy = [...array];
  const temp = [];
  while (copy.length > 0) {
    temp.push(copy.splice(0, group));
  }
  return temp;
}
