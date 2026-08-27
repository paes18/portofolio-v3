import { useCursorContext, type CursorVariant } from '../context/CursorContext';

/**
 * Reusable hook for components to bind contextual cursor hover listeners.
 */
export function useCursor(variant: CursorVariant = 'link', text = '') {
  const { setCursor, resetCursor, isTouchDevice } = useCursorContext();

  const bindCursorEvents = () => {
    if (isTouchDevice) return {};

    return {
      onMouseEnter: () => setCursor(variant, text),
      onMouseLeave: () => resetCursor(),
    };
  };

  return {
    bindCursorEvents,
    setCursor,
    resetCursor,
    isTouchDevice,
  };
}
