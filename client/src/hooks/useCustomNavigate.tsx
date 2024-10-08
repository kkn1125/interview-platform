import { useCallback } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { pathJoin } from "../utils/pathJoin";

function useCustomNavigate() {
  const navigate = useNavigate();
  const forward = useCallback(
    (to: string | string[], options?: NavigateOptions) => {
      const prefix = import.meta.env.BASE_URL;
      const url = pathJoin(prefix, ...(to instanceof Array ? [...to] : [to]));
      navigate(url, options);
    },
    [navigate]
  );
  return { forward };
}

export default useCustomNavigate;
