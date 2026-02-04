import React from 'react';

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): ((...args: any[]) => void) => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  return React.useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [callback, delay],
  );
};
