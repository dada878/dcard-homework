import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("ts", ts);

function Code(props: any) {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className ?? "");
  return match ? (
    <SyntaxHighlighter language={match[1]} style={dracula}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
}

export default function MarkdownRender({
  content,
  className,
}: Readonly<{
  content: string;
  className?: string;
}>) {
  return (
    <Markdown
      className={`prose dark:prose-invert overflow-y-hidden ${className}`}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code: Code,
      }}
    >
      {content.replaceAll(" \\ ", "  ")}
    </Markdown>
  );
}
