import { useState } from "react";

export function useToggle(init?: boolean) {
  const [state, setState] = useState(init || false);
  const toggle = () => setState((prev) => !prev);
  return { state, toggle };
}
