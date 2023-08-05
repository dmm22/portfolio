import Code from "./components/Code"
import Explorer from "./components/Explorer"
import Interactive from "./components/Interactive"
import ProjectInfoBar from "./components/ProjectInfoBar"
import RepositorySelector from "./components/RepositorySelector"
import CodeContextProvider from "./contexts/CodeContext"

export default function App() {
  return (
    <CodeContextProvider>
      <div className="flex">
        <RepositorySelector />
        <div className="flex flex-col flex-1">
          <ProjectInfoBar />
          <main className="flex flex-1">
            <Explorer />
            <Interactive />
            {/* <Code /> */}
          </main>
        </div>
      </div>
    </CodeContextProvider>
  )
}
