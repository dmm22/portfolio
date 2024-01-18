import { useEffect, useState } from "react"

import Explorer from "./components/Explorer"
import ProjectInfoBar from "./components/ProjectInfoBar"
import ProjectView from "./components/ProjectView"
import ProjectViewToggler from "./components/ProjectViewToggler"
import RepositorySelector from "./components/RepositorySelector"
import CodeContextProvider from "./contexts/CodeContext"
import useLocalStorage from "./hooks/useLocalStorage"
import Modal from "./components/Modal"
import PortfolioGuide from "./components/PortfolioGuide"

export default function App() {
  const [modalPreviouslyShown, setModalPreviouslyShown] = useLocalStorage<boolean>(
    "modalPreviouslyShown",
    false
  )
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!modalPreviouslyShown) {
      setShowModal(true)
      setModalPreviouslyShown(true)
    }
  }, [])

  function closeModal() {
    setModalPreviouslyShown(true)
    setShowModal(false)
  }

  return (
    <CodeContextProvider>
      <>
        {showModal && (
          <Modal closeModal={closeModal}>{<PortfolioGuide closeModal={closeModal} />}</Modal>
        )}
      </>
      <div className="h-screen">
        <ProjectViewToggler />
        <div className="flex h-full">
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
