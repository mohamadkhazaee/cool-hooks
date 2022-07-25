import { renderHook } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  test("should return false at first", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(true);
  });
});
