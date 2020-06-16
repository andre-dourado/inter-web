import { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: any,
): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(!!event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
