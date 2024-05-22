import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// Main Markdown component
const MarkdownComponent = ({
  markdownContent,
}: {
  markdownContent: string;
}) => {
  const renderers = {
    link: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href} {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{ a: renderers.link }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;
