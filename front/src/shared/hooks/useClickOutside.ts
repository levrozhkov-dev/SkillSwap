import { useEffect, type RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent ) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;
      
      if (!el || el.contains((event.target as Node) || null)) {
        return;
      }
      
      handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};