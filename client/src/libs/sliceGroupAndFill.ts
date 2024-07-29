export function sliceGroupAndFill<T, K>(
  array: (T | K)[],
  group: number,
  fill: K
) {
  const copy = [...array];
  const temp = [];
  while (copy.length > 0) {
    const sliced = copy.splice(0, group);
    const fillAmount = group - sliced.length;
    sliced.push(...Array.from(Array(fillAmount), () => fill));
    temp.push(sliced);
  }
  return temp;
}
