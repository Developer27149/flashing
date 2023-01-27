import type { IFile, TMenu } from "~interfaces"

import resso from "resso"

export const store = resso({
  menu: "all" as TMenu,
  message: "",
  downloadUrl: "",
  showAddDownloadComponent: false,
  query: "",
  recentFile: [] as IFile,
  searching: false,
  items: [] as IFile[],
  speedRecord: {} as Record<string, number>
})
