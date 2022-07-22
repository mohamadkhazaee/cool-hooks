import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  test("felan", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(true);
  });
});
