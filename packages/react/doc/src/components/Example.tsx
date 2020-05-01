import React, { ReactNode, ReactElement } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import style from "react-syntax-highlighter/dist/esm/styles/prism/darcula";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);

export interface ExampleProps {
  jsx?: string;
  css?: string;
  children?: ReactNode;
}

export function Example({ children, jsx, css }: ExampleProps): ReactElement {
  return (
    <div className="doc-example">
      {children}
      {jsx && (
        <SyntaxHighlighter language="jsx" style={style}>
          {jsx.trim()}
        </SyntaxHighlighter>
      )}
      {css && (
        <SyntaxHighlighter language="css" style={style}>
          {css.trim()}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
