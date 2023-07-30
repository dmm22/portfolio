import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerFolder from "./ExplorerFolder"
import Svg from "./Svg"

interface ExplorerItemProps {
  item: FileItem | FolderItem
}

export default function ExplorerItem({ item }: ExplorerItemProps) {
  if (item.type === "dir") return <ExplorerFolder folderName={item.itemName} />
  else return <Svg svgName={item.type} classes="h-5" />
}
