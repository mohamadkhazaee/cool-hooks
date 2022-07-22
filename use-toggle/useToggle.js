import { useState } from "react";

export function useToggle() {
  const [state, setState] = useState(true);
  const toggle = () => setState((prev) => !prev);
  return { state, toggle };
}
