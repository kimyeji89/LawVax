import { useLocation } from "react-router-dom";

export default function useLocationControl() {
  const location = useLocation();

  const includeLocation = (path) => location.pathname.includes(path);

  const checkLocation = (pathArr) =>
    pathArr.some((path) => location.pathname === path);

  return { includeLocation, checkLocation };
}
