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
    <>
      <button
        className="m-2 bg-white text-black p-1 rounded"
        onClick={() => switchRepository("notes")}
      >
        notes
      </button>
      <button
        className="m-2 bg-white text-black p-1 rounded"
        onClick={() => switchRepository("typing")}
      >
        typing
      </button>
      <button
        className="m-2 bg-white text-black p-1 rounded"
        onClick={() => switchRepository("timeSheet")}
      >
        time sheet
      </button>
      <div className="bg-secondary-bg">
        {repository.map(item => (
          <ExplorerItem item={item as FileItem | FolderItem} />
        ))}
      </div>
    </>
  )
}
