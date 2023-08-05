import { useContext, useEffect } from "react"
import { CodeContext } from "../contexts/CodeContext"
import Svg from "./Svg"

export default function ProjectInfoBar() {
  const { currentFile, repository } = useContext(CodeContext)

  useEffect(() => {
    getFilePathJsx()
  }, [])

  function getFilePathJsx() {
    const filePathSegments = currentFile.path.replace(/\//g, "#/#").split("#")
    const jsx = filePathSegments.map((segment, i) => {
      if (segment === "/") {
        return <Svg svgName="expand" classes="h-2 mx-1" />
      }

      if (i === filePathSegments.length - 1) {
        return (
          <div className="flex items-center">
            <Svg svgName={currentFile.type} classes="h-3 mx-1" />
            <small className="mb-1">{segment}</small>
          </div>
        )
      } else return <small className="mb-1">{segment}</small>
    })

    return jsx
  }

  return (
    <div className="bg-primary-bg w-max flex text-primary-text pl-2 pb-1 pt-1">
      <small className="w-48 font-bold">{repository.title}</small>
      <div className="flex items-center">{getFilePathJsx()}</div>
    </div>
  )
}
