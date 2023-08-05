import notes from "../data/notes.json"
import timeSheet from "../data/timeSheet.json"
import typing from "../data/typing.json"
import { createContext, useState, useEffect, SetStateAction } from "react"
import RepositoryName from "../types/RepositoryName"
import getCode from "../adapters/getCode"
import FileItem from "../types/FileItem"

type Repository = typeof notes

interface CodeContextInterface {
  repository: Repository
  switchRepository: (newRepository: RepositoryName) => void
  currentFile: FileItem
  setCurrentFile: React.Dispatch<SetStateAction<FileItem>>
}

export const CodeContext = createContext<CodeContextInterface>(
  {} as CodeContextInterface
)

const repositories = { notes, timeSheet, typing }

export default function CodeContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const [repository, setRepository] = useState(notes)
  const [currentFile, setCurrentFile] = useState({
    itemName: "NoteContext.tsx",
    path: "src/contexts/NoteContext.tsx",
    type: "tsx",
    url: "https://raw.githubusercontent.com/dmm22/notes/master/src/contexts/NoteContext.tsx",
  })

  function switchRepository(newRepository: RepositoryName) {
    setRepository(repositories[newRepository])
  }

  return (
    <CodeContext.Provider
      value={{
        repository,
        switchRepository,
        currentFile,
        setCurrentFile,
      }}
    >
      {children}
    </CodeContext.Provider>
  )
}
