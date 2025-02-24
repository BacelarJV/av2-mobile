import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../hooks/useCounter";
test("should initialize counter with default value", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
});

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("should decrement counter", () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(4);
});
