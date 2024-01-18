import Svg from "./Svg"
import { MdClose } from "react-icons/md"

type PortfolioGuideProps = { closeModal: () => void }

export default function PortfolioGuide({ closeModal }: PortfolioGuideProps) {
  return (
    <div className="flex flex-col p-4 mx-32 overflow-hidden bg-white rounded shadow-xl">
      <div className="flex">
        <div className="flex flex-col items-center w-3/4 mx-auto mb-4">
          <Svg svgName="avatar" classes="max-h-32 mr-4 mb-2" />
          <h1 className="text-3xl font-bold text-center text-neutral-800">
            Welcome to My Portfolio! I'm Dave. I love working with all things JavaScript and teaming
            up to create cool stuff.
          </h1>
        </div>
        <MdClose className="mx-2 text-3xl cursor-pointer" onClick={closeModal} />
      </div>
      <div className="flex items-center gap-3 p-3 ">
        <Svg svgName="projects panel" classes="flex-1 min-w-0 rounded" />
        <Svg svgName="interactive view" classes="flex-1 min-w-0 rounded" />
        <Svg svgName="code view" classes="flex-1 min-w-0 rounded" />
      </div>
    </div>
  )
}
