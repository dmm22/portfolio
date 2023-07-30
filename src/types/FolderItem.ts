import FileItem from "./FileItem"

interface FolderItem {
  itemName: string
  path: string
  type: string
  contents: (FileItem | FolderItem)[]
}

export default FolderItem
