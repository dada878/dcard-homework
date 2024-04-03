import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import py from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import "katex/dist/katex.min.css";
import { cn } from "@/utils/cn";

SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("py", py);

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
      className={cn(
        `prose overflow-y-hidden dark:prose-invert`,
        className,
      )}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[[rehypeKatex, { strict: false }]]}
      components={{
        code: Code,
      }}
    >
      {content.replaceAll(" \\ ", "  ")}
    </Markdown>
  );
}
