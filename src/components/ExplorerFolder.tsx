import { useState } from "react"
import Svg from "./Svg"

interface ExplorerFolderProps {
  folderName: string
}

export default function ExplorerFolder({ folderName }: ExplorerFolderProps) {
  const [src, setSrc] = useState(() => `folder-${folderName}`)
  return <Svg svgName={src} classes="h-5" />
}
