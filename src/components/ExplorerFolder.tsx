import { useState } from "react"
import Svg from "./Svg"

interface ExplorerFolderProps {
  folderName: string
}

export default function ExplorerFolder({ folderName }: ExplorerFolderProps) {
  const [src, setSrc] = useState(() => `folder-${folderName}`)

  function toggleFolder() {
    setSrc(src =>
      src === `folder-${folderName}`
        ? `folder-${folderName}-open`
        : `folder-${folderName}`
    )
  }

  return (
    <span onClick={toggleFolder}>
      <Svg svgName={src} classes="h-5 cursor-pointer" />
    </span>
  )
}
