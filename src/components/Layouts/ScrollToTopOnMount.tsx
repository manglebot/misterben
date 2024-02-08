import React, { useCallback } from "react";

interface ScrollToTopOnMountProps {
  children: React.ReactNode;
}

function ScrollToTopOnMount({ children }: ScrollToTopOnMountProps) {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return <span onClick={handleScrollToTop}>{children}</span>;
}

export default ScrollToTopOnMount;
