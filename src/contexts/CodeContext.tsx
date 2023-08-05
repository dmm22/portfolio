import notes from "../data/notes.json"
import timeSheet from "../data/timeSheet.json"
import typing from "../data/typing.json"
import { createContext, useState, useEffect } from "react"
import RepositoryName from "../types/RepositoryName"
import getCode from "../adapters/getCode"

type Repository = typeof notes

interface CodeContextInterface {
  repository: Repository
  switchRepository: (newRepository: RepositoryName) => void
  currentCode: string
  switchCurrentCode: (url: string) => void
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
  const [currentCode, setCurrentCode] = useState("")

  useEffect(() => {
    ;(async () => {
      const noteContextUrl =
        "https://raw.githubusercontent.com/dmm22/notes/master/src/contexts/NoteContext.tsx"

      const startingCode = await getCode(noteContextUrl)
      setCurrentCode(startingCode)
    })()
  }, [])

  function switchRepository(newRepository: RepositoryName) {
    setRepository(repositories[newRepository])
  }

  async function switchCurrentCode(url: string) {
    setCurrentCode(await getCode(url))
  }

  return (
    <CodeContext.Provider
      value={{
        repository,
        switchRepository,
        currentCode,
        switchCurrentCode,
      }}
    >
      {children}
    </CodeContext.Provider>
  )
}
