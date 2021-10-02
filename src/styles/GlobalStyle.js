import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}
pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	border-radius: 0.3em;
}
.hljs-selector-tag, .hljs-selector-class{
  color:orange;
}
.hljs-attribute{
  color:rgb(0 188 212)
}

.light{
  pre{
    background: rgb(34, 34, 34);
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    
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
    color: #888888;
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



.hljs-boolean,
.hljs-number,
.hljs-constant,
.hljs-symbol,
.hljs-inserted,
.hljs-unit {
  color: #7F00FF;
  font-style: italic;

}
.hljs-title.hljs-function{
  color:rgb(43,193 ,227);
}

.hljs-selector,
.hljs-attr-name,
.hljs-string,
.hljs-char,
.hljs-builtin,
.hljs-deleted {
  color:rgb(255 213 0);
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

.hljs-atrule .hljs-url  {
  color: #dcdcaa;
}

.hljs-atrule .hljs-url .hljs-punctuation {
  color: #d4d4d4;
}

.hljs-keyword {
  color: rgb(212 13 119);;
}

.hljs-keyword.hljs-module,
.hljs-keyword.control-flow {
  color: #c586c0;
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

.hljs-property
{
  color: rgb(255 152 0);
}
.hljs-variable.hljs-language{
  color:rgb(170, 71, 245);
}
.hljs-selector {
  color: #d7ba7d;
}
.hljs-literal{
  color: rgb(0 188 212);
  
}

.hljs-escape {
  color: #d7ba7d;
}

.hljs-tag {
  color: rgb(78 201 176);
}

.hljs-tag .hljs-punctuation {
  color: #808080;
}

.hljs-cdata {
  color: #808080;
}

.hljs-attr{
  color: #86cf17;
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
    color:rgb(255 213 0);
  }
  .hljs-variable.hljs-language{
  color:rgb(170, 71, 245);
}

  .hljs-number {
    color: #7F00FF;
  font-style: italic;

  }
  .hljs-builtin,
  .hljs-char,
  .hljs-constant,
  .hljs-title.hljs-function {
    color:rgb(43,193 ,227);
  }
  .hljs-punctuation {
    color: rgb(199, 146, 234);
  }
  .hljs-title.hljs-class{
    color:#4ec9b0
  }
  .hljs-class
 {
  color: #4ec9b0;
}
.hljs-attr{
  color: #86cf17;
}
.hljs-literal{
  color: rgb(0 188 212);
  
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
    color: rgb(212 13 119);
}
  .hljs-boolean {
    color: rgb(255, 88, 116);
  }
  .hljs-property {
    color: rgb(255 152 0);
  }
  .hljs-namespace {
    color: #4ec9b0;
  }
  .hljs-comment,
  .hljs-prolog,
  .hljs-doctype,
  .hljs-cdata {
    color: #888888;
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
`
