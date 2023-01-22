import type { IFile, TMenu } from "~interfaces"

import resso from "resso"

export const store = resso({
  menu: "all" as TMenu,
  query: "",
  recentFile: [] as IFile,
  searching: true,
  items: [] as IFile[],
  speedRecord: {} as Record<string, number>
  // menuFilter: (item: IFile) =>
})
