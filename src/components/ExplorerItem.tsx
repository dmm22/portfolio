import { useContext } from "react"
import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerFolder from "./ExplorerFolder"
import Svg from "./Svg"
import { CodeContext } from "../contexts/CodeContext"

interface ExplorerItemProps {
  item: FileItem | FolderItem
}

export default function ExplorerItem({ item }: ExplorerItemProps) {
  const { setCurrentFile, setViewMode } = useContext(CodeContext)

  function handleItemClick() {
    if ("url" in item) {
      setCurrentFile(item)
      setViewMode("code")
    }
  }

  return (
    <div onClick={handleItemClick} className="my-0.5 cursor-pointer">
      {item.type === "dir" ? (
        <ExplorerFolder folder={item as FolderItem} />
      ) : (
        <div className="flex hover:bg-highlight">
          <Svg svgName={item.type} classes="h-4 ml-4" />
          <span className="text-sm text-primary-text ml-1">
            {item.itemName}
          </span>
        </div>
      )}
    </div>
  )
}
