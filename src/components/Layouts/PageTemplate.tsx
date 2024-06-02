import React, { useRef } from "react";
import { gsap, useGSAP } from "../../Utilities/gsapUtils";
import MarkdownComponent from "./MarkdownComponent";

interface PageTemplateProps {
  title: string;
  content: string;
  onClose: () => void;
  previousContentRef: React.RefObject<HTMLDivElement> | null; // Update the type to accept null
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  content,
  onClose,
  previousContentRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        scale: 0,
        transformOrigin: "top left",
        duration: 0.5,
      });
    }

    if (contentRef.current) {
      tl.from(
        contentRef.current,
        {
          opacity: 0,
          scale: 0,
          transformOrigin: "top left",
          duration: 0.5,
        },
        "-=0.3"
      );
    }

    if (closeButtonRef.current) {
      const closeButtonRect = closeButtonRef.current.getBoundingClientRect();
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: closeButtonRect.top + window.scrollY,
          autoKill: false,
        },
      });
    }
  }, [titleRef, contentRef, closeButtonRef]);

  const handleCloseClick = () => {
    console.log("handleCloseClick");
    if (containerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          onClose();
          gsap.set(containerRef.current, { clearProps: "all" });
        },
      });

      tl.to(containerRef.current, {
        duration: 0.5,
        scale: 0,
        transformOrigin: "top left",
      });

      if (previousContentRef?.current) {
        tl.fromTo(
          previousContentRef.current,
          { scale: 0, opacity: 0 }, // Start from a scaled-down and hidden state
          {
            duration: 0.5,
            scale: 1,
            opacity: 1,
            transformOrigin: "top left",
            clearProps: "all", // Clear GSAP properties to prevent conflicts
          },
          "-=0.3" // Overlap the animations slightly for a smoother transition
        );
      }
    }
  };

  return (
    <div className="inner-page" ref={containerRef}>
      <div
        className="inner-page__close-button"
        ref={closeButtonRef}
        onClick={handleCloseClick}
      >
        Close
      </div>
      <h1 ref={titleRef}>{title}</h1>
      <div ref={contentRef}>
        <MarkdownComponent markdownContent={content} />
      </div>
    </div>
  );
};

export default PageTemplate;
