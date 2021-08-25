import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.light{
  code {
    white-space: pre;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: none;
    font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono",
    "Courier New", monospace;

    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 24px 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #FAFAFA;
    border: 1px solid #E5E5E5;

  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .hljs-comment,
  .hljs-prolog,
  .hljs-doctype,
  .hljs-cdata {
    color: #6a9955;
  }
  .hljs-doctype .hljs-doctype-tag {
  color: #569cd6;
}

.hljs-doctype .hljs-name {
  color: #9cdcfe;
}



.hljs-punctuation,
.language-html .language-css .hljs-punctuation,
.language-html .language-javascript .hljs-punctuation {
  color: #d4d4d4;
}

.hljs-property,
.hljs-tag,
.hljs-boolean,
.hljs-number,
.hljs-constant,
.hljs-symbol,
.hljs-inserted,
.hljs-unit {
  color: rgb(247, 140, 108);
}

.hljs-selector,
.hljs-attr-name,
.hljs-string,
.hljs-char,
.hljs-builtin,
.hljs-deleted {
  color: #ce9178;
}

.language-css .hljs-string.hljs-url {
  text-decoration: underline;
}

.hljs-operator,
.hljs-entity {
  color: #d4d4d4;
}

.hljs-operator.arrow {
  color: #569cd6;
}

.hljs-atrule {
  color: #ce9178;
}

.hljs-atrule .hljs-rule {
  color: #c586c0;
}

.hljs-atrule .hljs-url {
  color: #9cdcfe;
}

.hljs-atrule .hljs-url .hljs-function {
  color: #dcdcaa;
}

.hljs-atrule .hljs-url .hljs-punctuation {
  color: #d4d4d4;
}

.hljs-keyword {
  color: #c586c0;
}

.hljs-keyword.hljs-module,
.hljs-keyword.control-flow {
  color: #c586c0;
}

.hljs-function,
.hljs-function .hljs-class {
  color: #dcdcaa;
}

.hljs-regex {
  color: #d16969;
}

.hljs-important {
  color: #569cd6;
}

.hljs-italic {
  font-style: italic;
}

.hljs-constant {
  color: #9cdcfe;
}

.hljs-class
 {
  color: #4ec9b0;
}

.hljs-console {
  color: #9cdcfe;
}

.hljs-parameter {
  color: #9cdcfe;
}

.hljs-interpolation {
  color: #9cdcfe;
}

.hljs-punctuation.interpolation-punctuation {
  color: #569cd6;
}

.hljs-boolean {
  color: #569cd6;
}

.hljs-property,
.hljs-variable,
.hljs-imports .hljs-class,
.hljs-exports .hljs-class{
  color: #9cdcfe;
}
.hljs-variable.hljs-language{
  color:#569cd6;
}
.hljs-selector {
  color: #d7ba7d;
}

.hljs-escape {
  color: #d7ba7d;
}

.hljs-tag {
  color: #569cd6;
}

.hljs-tag .hljs-punctuation {
  color: #808080;
}

.hljs-cdata {
  color: #808080;
}

.hljs-attr-name {
  color: #9cdcfe;
}

.hljs-attr-value,
.hljs-attr-value .hljs-punctuation {
  color: #ce9178;
}

.hljs-attr-value .hljs-punctuation.attr-equals {
  color: #d4d4d4;
}

.hljs-entity {
  color: #569cd6;
}

.hljs-namespace {
  color: #4ec9b0;
}
}
  .mdx-marker {
    display: block;
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #E5E5E5;
    min-width: fit-content;
  }

 .dark {
    :not(pre) > code[class*="language-"] {
    background: #021c27 !important;
  }
  .hljs-namespace {
  color: #4ec9b0;
}
  .hljs-string,
  .hljs-url {
    color: rgb(173, 219, 103);
  }
  .hljs-variable {
    color:#569cd6;
  }
  .hljs-number {
    color: rgb(247, 140, 108);
  }
  .hljs-builtin,
  .hljs-char,
  .hljs-constant,
  .hljs-function {
    color: rgb(130, 170, 255);
  }
  .hljs-punctuation {
    color: rgb(199, 146, 234);
  }
  .hljs-class
 {
  color: #4ec9b0;
}

  .hljs-selector,
  .hljs-doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }
  .hljs {
    color: rgb(255, 203, 139);
  }
  .hljs-tag,
  .hljs-operator,
  .hljs-keyword {
    color: #c586c0;
}
  .hljs-boolean {
    color: rgb(255, 88, 116);
  }
  .hljs-property {
    color: #9cdcfe;
  }
  .hljs-namespace {
    color: #4ec9b0;
  }
  .hljs-comment,
  .hljs-prolog,
  .hljs-doctype,
  .hljs-cdata {
    color: #6a9955;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    color: #FAFAFA;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #262626;
    border: 1px solid  #404040;
  }
  .mdx-marker {
    background-color:  #404040;
  }
  .remark-code-title {
    background:  #404040;
    color: #F5F5F5;
    border: 1px solid #404040;
  }

  }
`;
