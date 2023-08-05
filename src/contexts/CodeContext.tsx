import notes from "../data/notes.json"
import timeSheet from "../data/timeSheet.json"
import typing from "../data/typing.json"
import { createContext, useState, SetStateAction } from "react"
import RepositoryName from "../types/RepositoryName"
import FileItem from "../types/FileItem"

type Repository = { title: string; data: typeof notes; url: string }

type ViewMode = "interactive" | "code"

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
  viewMode: ViewMode
  setViewMode: React.Dispatch<SetStateAction<ViewMode>>
}

export const CodeContext = createContext<CodeContextInterface>(
  {} as CodeContextInterface
)

const repositories: Repositories = {
  notes: {
    title: "Notes",
    data: notes,
    url: "https://64ce698bdad64a4b9a2bab6f--glittery-lebkuchen-f018d5.netlify.app/",
  },
  timeSheet: {
    title: "TimeSheet",
    data: timeSheet,
    url: "https://64ce6738d144564bdaf62166--luxury-klepon-819239.netlify.app/",
  },
  typing: {
    title: "Typing",
    data: typing,
    url: "https://www.customtypingpractice.com/",
  },
}

export default function CodeContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const [repository, setRepository] = useState(repositories.typing)
  const [viewMode, setViewMode] = useState<ViewMode>("code")
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
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </CodeContext.Provider>
  )
}
