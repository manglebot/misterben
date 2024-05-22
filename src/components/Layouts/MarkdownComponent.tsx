import React from "react";
import ReactMarkdown from "react-markdown";
import { LinkProps } from "react-router-dom";
import rehypeRaw from "rehype-raw";
// import styled from "styled-components";

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

// Custom renderers
const renderers = {
  link: ({ href, children }: { href: string; children: React.ReactNode }) => {
    if (href.includes("youtube.com")) {
      return <YouTubeEmbed src={href} />;
    }
    if (href.includes("instagram.com")) {
      return <InstagramEmbed src={href} />;
    }
    return <a href={href}>{children}</a>;
  },
};

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
