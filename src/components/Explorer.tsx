import typing from "../data/typing.json"
import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerItem from "./ExplorerItem"

export default function Explorer() {
  return (
    <div className="bg-secondary-bg">
      {typing.map(item => (
        <ExplorerItem item={item as FileItem | FolderItem} />
      ))}
    </div>
  )
}
