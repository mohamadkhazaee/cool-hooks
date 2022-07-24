import { useState, useEffect } from "react";
import { WindowSize } from "./types";

export function useWindowSize() {
  //  initialize window size with undefined so it works same for server and client renders
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);

    //   update size with initial window size
    updateSize();

    //   removes event listener on cleanup
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
