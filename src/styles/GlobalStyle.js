import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
.token.selector-tag,
.token.selector-class {
  color: orange;
}
.token.attribute {
  color: rgb(0 188 212);
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #888888;
}
.token.doctype .token.doctype-tag {
  color: #569cd6;
}

.token.doctype .token.name {
  color: #9cdcfe;
}

.token.punctuation,
.language-html .language-css .token.punctuation,
.language-html .language-javascript .token.punctuation {
  color: rgb(199, 146, 234);
}

.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.inserted,
.token.unit {
  color: rgb(255, 88, 116);
  font-style: italic;
}
.token.title,
.token.function {
  color: rgb(43, 193, 227);
}
.token.title,
.token.class {
  color: rgb(43, 193, 227);
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.deleted {
  color: rgb(255 213 0);
}

.language-css .token.string.token.url {
  text-decoration: underline;
}

.token.operator,
.token.entity {
  color: rgb(212 13 119);
}

.token.operator.arrow {
  color: rgb(212 13 119);
}

.token.atrule {
  color: #ce9178;
}

.token.atrule .token.rule {
  color: #c586c0;
}

.token.atrule .token.url {
  color: #9cdcfe;
}

.token.atrule .token.url {
  color: #dcdcaa;
}

.token.atrule .token.url .token.punctuation {
  color: #d4d4d4;
}

.token.keyword {
  color: rgb(212 13 119);
}

.token.keyword.token.module,
.token.keyword.control-flow {
  color: rgb(212 13 119);
}

.token.regex {
  color: #d16969;
}

.token.important {
  color: #569cd6;
}

.token.italic {
  font-style: italic;
}

.token.class {
  color: #4ec9b0;
}

.token.console {
  color: #9cdcfe;
}

.token.parameter {
  color: #9cdcfe;
}

.token.interpolation {
  color: #9cdcfe;
}

.token.punctuation.interpolation-punctuation {
  color: #569cd6;
}

.token.boolean {
  color: rgb(255, 88, 116);
  font-style: italic;
}

.token.property {
  color: rgb(255 152 0);
}
.token.variable.token.language {
  color: rgb(170, 71, 245);
}
.token.selector {
  color: #d7ba7d;
}
.token.literal {
  color: rgb(244 67 54);
}

.token.escape {
  color: #d7ba7d;
}

.token.tag {
  color: rgb(170, 71, 245);
}

.token.cdata {
  color: #808080;
}

.token.attr {
  color: #86cf17;
}

.token.attr-value,
.token.attr-value .token.punctuation {
  color: #ce9178;
}

.token.attr-value .token.punctuation.attr-equals {
  color: #d4d4d4;
}

.token.entity {
  color: #569cd6;
}

.token.namespace {
  color: #4ec9b0;
}
.light {
  pre {
    background: rgb(34, 34, 34);
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    border: 1px solid #e5e5e5;
  }
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
}
.mdx-marker {
  display: block;
  margin-left: -16px;
  margin-right: -16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #e5e5e5;
  min-width: fit-content;
}

.dark {
  :not(pre) > code[class*='language-'] {
    background: #021c27 !important;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #fafafa;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #262626;
    border: 1px solid #404040;
  }
  .mdx-marker {
    background-color: #404040;
  }
  .remark-code-title {
    background: #404040;
    color: #f5f5f5;
    border: 1px solid #404040;
  }
  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }
}
.code-line {
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: -16px;
  margin-right: -16px;
  border-left-width: 4px;
  border-left-color: rgba(31, 41, 55, 0); /* Set code block color */
}

.code-line.inserted {
  background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
}

.code-line.deleted {
  background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
}

.highlight-line {
  margin-left: -16px;
  margin-right: -16px;
  background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
  border-left-width: 4px;
  border-left-color: rgb(59, 130, 246); /* Set highlight accent border color */
}

.line-number::before {
  display: inline-block;
  width: 1rem;
  text-align: right;
  margin-right: 16px;
  margin-left: -8px;
  color: rgb(156, 163, 175); /* Line number color */
  content: attr(line);
}
`
