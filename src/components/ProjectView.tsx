import { useContext } from "react"
import { CodeContext } from "../contexts/CodeContext"
import Code from "./Code"
import Interactive from "./Interactive"

export default function ProjectView() {
  const { viewMode } = useContext(CodeContext)
  return viewMode === "code" ? <Code /> : <Interactive />
}
