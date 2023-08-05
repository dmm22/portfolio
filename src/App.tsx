import Code from "./components/Code"
import Explorer from "./components/Explorer"
import ProjectInfoBar from "./components/ProjectInfoBar"
import CodeContextProvider from "./contexts/CodeContext"

export default function App() {
  return (
    <CodeContextProvider>
      <div>
        <ProjectInfoBar />
        <main className="flex">
          <Explorer />
          <Code />
        </main>
      </div>
    </CodeContextProvider>
  )
}
