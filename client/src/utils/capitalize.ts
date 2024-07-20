export const capitalize = (value: string) =>
  value
    .replace(/[\^!@#()]+/g, "")
    .split(/[-_\s]+/g)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
