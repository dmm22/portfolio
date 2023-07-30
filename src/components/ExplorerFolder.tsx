import { useState } from "react"
import Svg from "./Svg"
import FolderItem from "../types/FolderItem"
import ExplorerItem from "./ExplorerItem"

interface ExplorerFolderProps {
  folder: FolderItem
}

export default function ExplorerFolder({
  folder: { itemName, contents },
}: ExplorerFolderProps) {
  const [src, setSrc] = useState(() => `folder-${itemName}`)

  function toggleFolder() {
    setSrc(src =>
      src === `folder-${itemName}`
        ? `folder-${itemName}-open`
        : `folder-${itemName}`
    )
  }

  function getItemMargin(itemPath: string) {
    const slashCount = itemPath.split("/").length - 1
    return slashCount * 0.75
  }

  return (
    <div className="flex flex-col">
      <div onClick={toggleFolder} className="flex hover:bg-highlight">
        <Svg svgName={src} classes="h-5" />
        <span className="text-sm text-primary-text ml-1">{itemName}</span>
      </div>
      <div style={{ marginLeft: `${getItemMargin(contents[0].path)}rem` }}>
        {/open/g.test(src) &&
          contents.map(item => <ExplorerItem item={item} />)}
      </div>
    </div>
  )
}
