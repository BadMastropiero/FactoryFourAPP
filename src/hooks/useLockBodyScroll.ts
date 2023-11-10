import { useLayoutEffect } from 'react';

export default function useLockBodyScroll(enabled: boolean, deps: unknown[]): void {
  // useLaoutEffect callback return type is "() => void" type
  useLayoutEffect((): (() => void) => {
    // Nasty workaround for strict linter complaining
    if (!enabled) return undefined as unknown as () => void;
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [deps]); // Empty array ensures effect is only run on mount and unmount
}
