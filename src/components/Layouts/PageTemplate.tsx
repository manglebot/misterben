import React, { useRef } from "react";
import { gsap, useGSAP } from "../../Utilities/gsapUtils";
import MarkdownComponent from "./MarkdownComponent";

interface PageTemplateProps {
  title: string;
  content: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.2 }
      );
    }
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
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

  return (
    <div className="inner-page" ref={containerRef}>
      <h1 ref={titleRef}>{title}</h1>
      <div ref={contentRef}>
        <MarkdownComponent markdownContent={content} />
      </div>
    </div>
  );
};

export default PageTemplate;
