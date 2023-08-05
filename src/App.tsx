import Explorer from "./components/Explorer"
import ProjectInfoBar from "./components/ProjectInfoBar"
import ProjectView from "./components/ProjectView"
import ProjectViewToggler from "./components/ProjectViewToggler"
import RepositorySelector from "./components/RepositorySelector"
import CodeContextProvider from "./contexts/CodeContext"

export default function App() {
  return (
    <CodeContextProvider>
      <div>
        <ProjectViewToggler />
        <div className="flex">
          <RepositorySelector />
          <div className="flex flex-col flex-1">
            <ProjectInfoBar />
            <main className="flex flex-1">
              <Explorer />
              <ProjectView />
            </main>
          </div>
        </div>
      </div>
    </CodeContextProvider>
  )
}
