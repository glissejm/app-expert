import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import MathJax from "mathjax3-react";

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [RemarkMathPlugin],
  renderers: {
    ...props.renderers,
    math: ({ value }) => <MathJax.Formula formula={value} />,
    inlineMath: ({ value }) => <MathJax.Formula inline formula={value} />,
  },
});

const Markdown = (props) => (
  <MathJax.Provider
    input="tex"
    options={{
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
      },
    }}
  >
    <ReactMarkdown {..._mapProps(props)} />
  </MathJax.Provider>
);
export default Markdown;
