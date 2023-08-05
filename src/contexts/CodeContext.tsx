import notes from "../data/notes.json"
import timeSheet from "../data/timeSheet.json"
import typing from "../data/typing.json"
import { createContext, useState, SetStateAction } from "react"
import RepositoryName from "../types/RepositoryName"
import FileItem from "../types/FileItem"

type Repository = { title: string; data: typeof notes }

interface Repositories {
  notes: Repository
  timeSheet: Repository
  typing: Repository
}

interface CodeContextInterface {
  repository: Repository
  switchRepository: (newRepository: RepositoryName) => void
  currentFile: FileItem
  setCurrentFile: React.Dispatch<SetStateAction<FileItem>>
}

export const CodeContext = createContext<CodeContextInterface>(
  {} as CodeContextInterface
)

const repositories: Repositories = {
  notes: { title: "Notes", data: notes },
  timeSheet: { title: "TimeSheet", data: timeSheet },
  typing: { title: "Typing", data: typing },
}

export default function CodeContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const [repository, setRepository] = useState(repositories.notes)
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
