import React from "react";
import MarkdownComponent from "./MarkdownComponent";

interface PageTemplateProps {
  title: string;
  content: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, content }) => {
  return (
    <div className="inner-page">
      <h1>{title}</h1>
      <MarkdownComponent markdownContent={content} />
    </div>
  );
};

export default PageTemplate;
