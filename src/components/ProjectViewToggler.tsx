import { useContext } from "react"
import Svg from "./Svg"
import { CodeContext } from "../contexts/CodeContext"

export default function ProjectViewToggler() {
  const { setViewMode } = useContext(CodeContext)

  return (
    <div className="flex flex-col">
      <div className="flex p-2">
        <div className="flex flex-col" style={{ color: "#d7b56e" }}>
          <h1 className="text-lg leading-tight font-bold text-center">
            David Martin
          </h1>
          <h2 className="text-xs leading-tight text-center">Web Developer</h2>
        </div>
        <div className="flex gap-7 mx-auto">
          <div
            onClick={() => setViewMode("code")}
            className="flex flex-col justify-center w-fit cursor-pointer"
          >
            <Svg svgName="code" classes="h-5" />
            <span className="text-xs font-medium" style={{ color: "#F0DC55" }}>
              Code View
            </span>
          </div>
          <div
            onClick={() => setViewMode("interactive")}
            className="flex flex-col justify-center w-fit cursor-pointer"
          >
            <Svg svgName="play" classes="h-5" />
            <span className="text-xs font-medium" style={{ color: "#43AA8B" }}>
              Interactive View
            </span>
          </div>
          <a
            href="https://github.com/dmm22?tab=repositories"
            className="flex flex-col justify-center w-fit cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg svgName="github" classes="h-5" />
            <span className="text-xs font-medium text-primary-text">
              Github
            </span>
          </a>
        </div>
      </div>
      <hr className="border-gray-200 border-opacity-30 pb-2" />
    </div>
  )
}
