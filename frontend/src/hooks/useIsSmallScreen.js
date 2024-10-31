import { useState, useEffect } from "react";

// Custom hook to tell if app is running on small screen
const useIsSmallScreen = () => {
  // define if app is in small screen
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);

  // useEffect to detect screen size
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 991;
      setIsSmallScreen(smallScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;
