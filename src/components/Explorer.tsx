import { useContext } from "react"

import FolderItem from "../types/FolderItem"
import FileItem from "../types/FileItem"
import ExplorerItem from "./ExplorerItem"
import { CodeContext } from "../contexts/CodeContext"
// import notes from "../data/notes.json"
// import typing from "../data/typing.json"
// import timeSheet from "../data/timeSheet.json"

export default function Explorer() {
  const { repository, switchRepository } = useContext(CodeContext)

  return (
    <div className="bg-secondary-bg w-48">
      {repository.map(item => (
        <ExplorerItem item={item as FileItem | FolderItem} />
      ))}
    </div>
  )
}
