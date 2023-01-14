import type { IFile } from "~interfaces"
import resso from "resso"

export const store = resso({
  query: "",
  recentFile: [] as IFile,
  searching: true,
  items: [] as IFile[],
  speedRecord: {} as Record<string, number>
})
