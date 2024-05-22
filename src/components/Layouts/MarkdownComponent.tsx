import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// Define your custom components
const YouTubeEmbed = ({ src }: { src: string }) => (
  <iframe
    width="560"
    height="315"
    src={src}
    frameBorder="0"
    allowFullScreen
  ></iframe>
);

const InstagramEmbed = ({ src }: { src: string }) => (
  <iframe
    src={src}
    width="400"
    height="480"
    frameBorder="0"
    scrolling="no"
    allowTransparency
  ></iframe>
);

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
