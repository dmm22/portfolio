import { useContext } from "react"

import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerItem from "./ExplorerItem"
import { CodeContext } from "../contexts/CodeContext"

export default function Explorer() {
  const { repository } = useContext(CodeContext)

  return (
    <div className="bg-secondary-bg w-48 px-1">
      {repository.data.map(item => (
        <ExplorerItem item={item as FileItem | FolderItem} />
      ))}
    </div>
  )
}
