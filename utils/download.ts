import type { IFile, TRawDownloadSearchQuery } from "~interfaces"

import { store } from "~store"

export const searchByQuery = (
  queryString: TRawDownloadSearchQuery = {}
): Promise<IFile[]> => {
  return new Promise((resolve) => {
    chrome.downloads.search(queryString, (items) => {
      items.sort(
        (prev, cur) => new Date(cur.startTime) - new Date(prev.startTime)
      )
      resolve(items)
    })
  })
}

export const resolveDownloadFileName = (name: string) =>
  name.replace(/^\/.*\//, "")

export const calcDownloadProgress = (
  current: number,
  total: number,
  reverse = false
) => {
  if (current !== 0 && total !== 0) {
    if (reverse)
      return `${((1 - current / total) * 100).toFixed(1).toString()}%`

    return `${((current / total) * 100).toFixed(1).toString()}%`
  }
  return "*"
}
