import type { IFile } from "~interfaces"
import resso from "resso"

export const store = resso({
  query: "",
  searching: true,
  items: [] as IFile[],
  defaultDownloadPath: ""
})
