/**
 * WebGL and Device Performance Capability Checker
 * Ensures low-power devices, mobile GPUs, or browsers without WebGL 2.0 safely fallback.
 */
export interface GraphicsCapabilities {
  hasWebGL: boolean;
  isLowPerformance: boolean;
  maxTextureSize: number;
}

export function checkGraphicsCapabilities(): GraphicsCapabilities {
  if (typeof window === 'undefined') {
    return { hasWebGL: false, isLowPerformance: true, maxTextureSize: 0 };
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      return { hasWebGL: false, isLowPerformance: true, maxTextureSize: 0 };
    }

    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 2048;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;

    const isLowPerformance = isMobile || hardwareConcurrency < 4 || maxTextureSize < 4096;

    return {
      hasWebGL: true,
      isLowPerformance,
      maxTextureSize,
    };
  } catch {
    return { hasWebGL: false, isLowPerformance: true, maxTextureSize: 0 };
  }
}
