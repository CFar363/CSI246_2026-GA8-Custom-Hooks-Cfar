// hooks/useDebounce.ts
import { useState, useEffect } from "react";

/*
  The useDebounce hook takes in a value and a delay (in milliseconds) and returns a debounced value.
  The debounced value only updates after the specified delay has passed without further changes.
  
  This is useful for optimizing operations like API calls triggered by user input.
*/
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timer if the value changes before the delay expires
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
