import React from "react";
import ReactMarkdown from "react-markdown";

interface PageTemplateProps {
  title: string;
  content: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, content }) => {
  return (
    <div className="inner-page">
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
      {/* Add any additional layout or components you want in the template */}
    </div>
  );
};

export default PageTemplate;
