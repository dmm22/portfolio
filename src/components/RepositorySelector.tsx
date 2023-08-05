import { useContext } from "react"
import Svg from "./Svg"
import { CodeContext } from "../contexts/CodeContext"

export default function RepositorySelector() {
  const { switchRepository } = useContext(CodeContext)

  return (
    <div className="flex flex-col gap-8 px-2">
      <h2 className="font-bold text-primary-text underline">Projects</h2>
      <div
        onClick={() => switchRepository("notes")}
        className="flex justify-center flex-col w-min mx-auto cursor-pointer"
      >
        <Svg svgName="notes" classes="h-4" />
        <small className="text-notification mb-1 font-medium text-center text-xs leading-tight">
          Note Taking
        </small>
      </div>
      <div
        onClick={() => switchRepository("typing")}
        className="flex justify-center flex-col w-min mx-auto cursor-pointer"
      >
        <Svg svgName="typing" classes="h-4" />
        <small className="text-notification mb-1 font-medium text-center text-xs leading-tight">
          Typing Test
        </small>
      </div>
      <div
        onClick={() => switchRepository("timeSheet")}
        className="flex justify-center flex-col w-min mx-auto cursor-pointer"
      >
        <Svg svgName="time-clock" classes="h-4" />
        <small className="text-notification mb-1 font-medium text-center text-xs leading-tight">
          Time Sheet
        </small>
      </div>
    </div>
  )
}
