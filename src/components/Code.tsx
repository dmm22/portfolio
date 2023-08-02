import { useContext } from "react"
import { CodeContext } from "../contexts/CodeContext"

export default function Code() {
  const { currentCode } = useContext(CodeContext)

  return <pre>{currentCode}</pre>
}
