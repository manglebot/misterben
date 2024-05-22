import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MarkdownComponent from "./MarkdownComponent";

gsap.registerPlugin(useGSAP);

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
  }, [titleRef, contentRef]);

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
