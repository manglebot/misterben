import React, { useRef } from "react";
import { gsap, useGSAP } from "../../Utilities/gsapUtils";
import MarkdownComponent from "./MarkdownComponent";

interface PageTemplateProps {
  title: string;
  content: string;
  onClose: () => void;
  portfolioItemRef: React.RefObject<HTMLDivElement>;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  content,
  onClose,
  portfolioItemRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
        duration: 0.5,
      });
    }

    if (contentRef.current) {
      tl.from(
        contentRef.current,
        {
          opacity: 0,
          scale: 0,
          transformOrigin: "center center",
          duration: 0.5,
        },
        "-=0.3"
      );
    }

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: containerRect.top,
          autoKill: false,
        },
      });
    }
  }, [titleRef, contentRef, containerRef]);

  const handleCloseClick = () => {
    gsap.to(containerRef.current, {
      duration: 0.5,
      scale: 0,
      transformOrigin: "center center",
      onComplete: () => {
        onClose();
        gsap.to(portfolioItemRef.current, {
          duration: 0.5,
          scale: 1,
          transformOrigin: "center center",
        });
      },
    });
  };

  return (
    <div className="inner-page" ref={containerRef}>
      <div className="inner-page__close-button" onClick={handleCloseClick}>
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
