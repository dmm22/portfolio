import { useContext, useState, useEffect } from "react"
import { CodeContext } from "../contexts/CodeContext"
import SyntaxHighlighter from "react-syntax-highlighter"
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark"
import getCode from "../adapters/getCode"

export default function Code() {
  const [currentCode, setCurrentCode] = useState("")
  const { currentFile } = useContext(CodeContext)

  useEffect(() => {
    ;(async () => setCurrentCode(await getCode(currentFile.url)))()
  }, [currentFile])

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
