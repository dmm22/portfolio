import Code from "./components/Code"
import Explorer from "./components/Explorer"
import CodeContextProvider from "./contexts/CodeContext"

export default function App() {
  return (
    <CodeContextProvider>
      <div className="flex">
        <Explorer />
        <Code />
      </div>
    </CodeContextProvider>
  )
}
