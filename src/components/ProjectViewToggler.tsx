import { useContext } from "react"
import Svg from "./Svg"
import { CodeContext } from "../contexts/CodeContext"

export default function ProjectViewToggler() {
  const { setViewMode } = useContext(CodeContext)

  return (
    <div className="flex gap-5">
      <div
        onClick={() => setViewMode("code")}
        className="flex flex-col justify-center w-fit cursor-pointer"
      >
        <Svg svgName="code" classes="h-5" />
        <span className="text-sm font-semibold" style={{ color: "#F0DC55" }}>
          Code View
        </span>
      </div>
      <div
        onClick={() => setViewMode("interactive")}
        className="flex flex-col justify-center w-fit cursor-pointer"
      >
        <Svg svgName="play" classes="h-5" />
        <span className="text-sm font-semibold" style={{ color: "#43AA8B" }}>
          Interactive View
        </span>
      </div>
    </div>
  )
}
