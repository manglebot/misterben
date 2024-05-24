import React, { useEffect } from "react";

const DebugPage: React.FC = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      console.log("Page clicked", event);
    };

    const handleFocus = (event: FocusEvent) => {
      console.log("Element focused", event);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("focus", handleFocus, true); // Use capture phase
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focus", handleFocus, true);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = (_event) => {
      console.log("Hash changed:", window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px", backgroundColor: "blue" }}>
      <h1>Debug Page</h1>
      <p>Click anywhere on this page to see if it jumps to the top.</p>
    </div>
  );
};

export default DebugPage;
