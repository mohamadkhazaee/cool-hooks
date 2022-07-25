import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  test("should return false as initial value", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.state).toBe(false);
  });

  test("should return passed value as initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.state).toBe(true);
  });

  test("should return opposite of initial value after one toggle", () => {
    const { result } = renderHook(() => useToggle());
    const { toggle, state: initState } = result.current;
    act(() => {
      toggle();
    });
    expect(result.current.state).toBe(!initState);
  });

  test("should return same value after two toggle", () => {
    const { result } = renderHook(() => useToggle());
    const { toggle, state: initState } = result.current;
    act(() => {
      toggle();
      toggle();
    });
    expect(result.current.state).toBe(initState);
  });
});
