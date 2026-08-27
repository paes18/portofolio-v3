import { useState, useEffect, useCallback } from 'react';

export interface EasterEggState {
  isDevMode: boolean;
  isPaesMode: boolean;
  isCoreAwake: boolean;
  notification: string | null;
  coreClickCount: number;
  footerClickCount: number;
}

export function useEasterEggs() {
  const [state, setState] = useState<EasterEggState>({
    isDevMode: false,
    isPaesMode: false,
    isCoreAwake: false,
    notification: null,
    coreClickCount: 0,
    footerClickCount: 0,
  });

  const showNotification = useCallback((message: string, duration = 4000) => {
    setState((prev) => ({ ...prev, notification: message }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, notification: null }));
    }, duration);
  }, []);

  // Keyboard sequence listener for "P-A-E-S" or "Ctrl+Shift+D"
  useEffect(() => {
    let keyBuffer: string[] = [];
    const targetSequence = ['p', 'a', 'e', 's'];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing inside an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      // Dev mode shortcut: Ctrl + Shift + D
      if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        setState((prev) => {
          const nextDev = !prev.isDevMode;
          showNotification(nextDev ? 'DEV MODE HUD INITIALIZED 🛠️' : 'DEV MODE TERMINATED');
          return { ...prev, isDevMode: nextDev };
        });
        return;
      }

      // Buffer last 4 keys
      keyBuffer.push(e.key.toLowerCase());
      if (keyBuffer.length > 4) {
        keyBuffer.shift();
      }

      // Check if matches "paes"
      if (keyBuffer.join('') === targetSequence.join('')) {
        setState((prev) => ({ ...prev, isPaesMode: true }));
        showNotification('⚡ YOU FOUND SOMETHING: PAES UNIVERSE SHIMMER ACTIVE!');
        keyBuffer = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showNotification]);

  // Click 3D Core 5 times
  const handleCoreClick = useCallback(() => {
    setState((prev) => {
      const nextCount = prev.coreClickCount + 1;
      if (nextCount >= 5) {
        showNotification('🌌 GENESIS CORE 3D // AWAKE MODE ACTIVATED!');
        setTimeout(() => {
          setState((s) => ({ ...s, isCoreAwake: false }));
        }, 6000);
        return { ...prev, coreClickCount: 0, isCoreAwake: true };
      }
      return { ...prev, coreClickCount: nextCount };
    });
  }, [showNotification]);

  // Click Footer Version badge 5 times
  const handleFooterClick = useCallback(() => {
    setState((prev) => {
      const nextCount = prev.footerClickCount + 1;
      if (nextCount >= 5) {
        const nextDev = !prev.isDevMode;
        showNotification(nextDev ? '🛠️ DEV MODE UNLOCKED! TELEMETRY HUD ACTIVE.' : 'DEV MODE DISABLED.');
        return { ...prev, footerClickCount: 0, isDevMode: nextDev };
      }
      return { ...prev, footerClickCount: nextCount };
    });
  }, [showNotification]);

  const toggleDevMode = useCallback(() => {
    setState((prev) => {
      const nextDev = !prev.isDevMode;
      showNotification(nextDev ? 'DEV MODE INITIALIZED' : 'DEV MODE CLOSED');
      return { ...prev, isDevMode: nextDev };
    });
  }, [showNotification]);

  return {
    ...state,
    handleCoreClick,
    handleFooterClick,
    toggleDevMode,
    showNotification,
  };
}
