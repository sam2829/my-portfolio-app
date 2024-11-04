import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// component to make sure pages load at the top of the page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
