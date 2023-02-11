import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
      return {
        windowWidth,
        windowHeight,
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    setWindowDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
