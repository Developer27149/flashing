import type { TRawDownloadSearchQuery } from "~interfaces"

export const searchByQuery = (
  queryString: TRawDownloadSearchQuery = {}
): Promise<IFile[]> => {
  return new Promise((resolve) => {
    chrome.downloads.search(queryString, (res) => {
      resolve(res)
    })
  })
}
