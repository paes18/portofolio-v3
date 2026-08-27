import React, { createContext, useContext, useState, useEffect } from 'react';

export type CursorVariant = 'default' | 'link' | 'project' | 'drag' | 'disabled';

interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  isTouchDevice: boolean;
  setCursor: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  cursorText: '',
  isTouchDevice: false,
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const setCursor = (variant: CursorVariant, text = '') => {
    if (isTouchDevice) return;
    setCursorVariant(variant);
    setCursorText(text);
  };

  const resetCursor = () => {
    if (isTouchDevice) return;
    setCursorVariant('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        isTouchDevice,
        setCursor,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => useContext(CursorContext);
