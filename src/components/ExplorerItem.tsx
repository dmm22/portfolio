import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerFolder from "./ExplorerFolder"
import Svg from "./Svg"

interface ExplorerItemProps {
  item: FileItem | FolderItem
}

export default function ExplorerItem({ item }: ExplorerItemProps) {
  function getItemMargin() {
    const slashCount = item.path.split("/").length - 1
    return slashCount * 2
  }

  return (
    <div className="my-0.5 cursor-pointer">
      {item.type === "dir" ? (
        <ExplorerFolder folder={item as FolderItem} />
      ) : (
        <div className="flex hover:bg-highlight">
          <Svg svgName={item.type} classes="h-5 ml-4" />
          <span className="text-sm text-primary-text ml-1">
            {item.itemName}
          </span>
        </div>
      )}
    </div>
  )
}
