import { useContext } from "react"
import { CodeContext } from "../contexts/CodeContext"
import SyntaxHighlighter from "react-syntax-highlighter"
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark"

export default function Code() {
  const { currentCode } = useContext(CodeContext)

  return (
    <div className="text-sm">
      <SyntaxHighlighter
        language="typescript"
        style={atomOneDark}
        showLineNumbers={true}
        lineNumberStyle={{ color: "#5c6370" }}
      >
        {currentCode}
      </SyntaxHighlighter>
    </div>
  )
}
