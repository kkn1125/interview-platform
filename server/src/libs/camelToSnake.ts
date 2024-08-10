export function camelToSnake(string: string) {
  const splited = string.split('_');
  return (
    splited[0].toLowerCase() +
    splited
      .slice(1)
      .map((split) => split[0].toUpperCase() + split.slice(1))
      .join('')
  );
}
