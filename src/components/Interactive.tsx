import { useContext } from "react"
import { CodeContext } from "../contexts/CodeContext"

export default function Interactive() {
  const { repository } = useContext(CodeContext)
  return (
    <iframe
      src={repository.url}
      className="w-full h-screen overflow-hidden bg-white"
    ></iframe>
  )
}
