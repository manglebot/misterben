import { useState, useEffect } from "react";
import "./css/BackToTopButton.css"; // Ensure to style your button

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className="back-to-top-button"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <span>Back to Top</span>
    </button>
  );
};

export default BackToTopButton;
