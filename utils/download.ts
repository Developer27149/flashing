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
      resolve(items.filter((i) => i.filename.length > 0))
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

export const calcSizeForHuman = (size: number) => {
  // if(size)
  if (size === -1) return "未知"
  if (size > 1024 * 1024 * 1024)
    return `${(size / 1024 / 1024 / 1024).toFixed(1)}G`.replace(".0", "")
  if (size > 1024 * 1024)
    return `${(size / 1024 / 1024).toFixed(1)}M`.replace(".0", "")
  return `${(size / 1024).toFixed(0)}kb`
}

export const deleteDownloadItemById = (id: number) =>
  chrome.downloads.removeFile(id).then(intervalTask)

export const eraseDownloadItemById = (id: number) =>
  chrome.downloads.erase({ id })

export const downloadResourceByUrl = (url: string) =>
  chrome.downloads.download({ url })

export const resumeDownloadItem = (id: number) => chrome.downloads.resume(id)
