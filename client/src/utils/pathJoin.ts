export const skipEmpty = (_: string) => _;
export const removeSlash = (path: string) => path.replace(/[/]+/g, "");

export const pathJoin = (...paths: string[]) => {
  const SLASH = import.meta.env.BASE_URL;
  return (
    SLASH +
    paths
      .reduce<string[]>((pathList, path) => {
        if (path.includes(SLASH)) {
          pathList.push(...path.split(SLASH).filter(removeSlash));
        } else {
          pathList.push(path);
        }
        return pathList;
      }, [])
      .join(SLASH)
  );
};
