import Explorer from "./components/Explorer"
import CodeContextProvider from "./contexts/CodeContext"

export default function App() {
  return (
    <CodeContextProvider>
      <div>
        <Explorer />
      </div>
    </CodeContextProvider>
  )
}
