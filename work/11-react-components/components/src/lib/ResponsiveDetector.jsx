import { useEffect, useState } from "react";

const useResponsiveDetector = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const isMobile = () => {
    // mobile device and window width is less than 768px
    return windowSize.width < 768;
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile();
}

export default useResponsiveDetector;