import * as React from "react";
import styled from "styled-components";
import theme from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";


const Wrapper = styled.div`
  overflow: auto;
  margin-left: -20px;
  margin-right: -20px;
`;

const Pre = styled.pre`
  float: left;
  min-width: 100%;
  overflow: initial;
`;
const Line = styled.div`
  display: table-row;
`;
const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;
const LineContent = styled.span`
  display: table-cell;
`;


function Code({ codeString, language }) {

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        </Wrapper>
      )}
    </Highlight>
  );
}

export default Code;
