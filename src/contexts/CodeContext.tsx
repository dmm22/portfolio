import notes from "../data/notes.json"
import timeSheet from "../data/timeSheet.json"
import typing from "../data/typing.json"
import { createContext, useState } from "react"
import RepositoryName from "../types/RepositoryName"

type Repository = typeof notes

interface CodeContextInterface {
  repository: Repository
  switchRepository: (newRepository: RepositoryName) => void
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

  function switchRepository(newRepository: RepositoryName) {
    setRepository(repositories[newRepository])
  }

  return (
    <CodeContext.Provider
      value={{
        repository,
        switchRepository,
      }}
    >
      {children}
    </CodeContext.Provider>
  )
}
