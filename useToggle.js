import { useState } from "react";

export function useToggle() {
  const [state, setState] = useState(false);
  const toggle = () => setState((prev) => !prev);
  return { state, toggle };
}
