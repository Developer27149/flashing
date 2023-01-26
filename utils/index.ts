import "dayjs/locale/zh-cn"

import type { IFile } from "~interfaces"
import dayjs from "dayjs"
import { errorTranslateRecord } from "./error"
import relativeTime from "dayjs/plugin/relativeTime"
import { searchByQuery } from "./download"
import { store } from "~store"
import { useMessage } from "~hooks/useMessage"

dayjs.extend(relativeTime)
dayjs.locale("zh-cn")

export const calcRelativeDate = (dateNumber: number) => {
  return dayjs(dateNumber).fromNow()
}

export const intervalTask = async () => {
  const { speedRecord } = store
  const _items = await searchByQuery()
  store.items = _items
  _items.forEach(({ bytesReceived, id, state }) => {
    if (state === "in_progress") {
      store.speedRecord[id] = bytesReceived - (speedRecord[id] ?? 0)
    } else {
      store.speedRecord[id] = undefined
    }
  })
}

export const resolveDownloadItemFileName = (file: IFile) => {
  const filename = file?.filename?.replace?.(/^\/.*\//, "") ?? "匿名"

  return filename.length > 40
    ? `${filename.substring(0, 20)}...${filename.substring(
        filename.length - 6
      )}`
    : filename
}

export const rawSizeToHumanSize = (total: number, fix = 1) => {
  if (total < 1024 * 1024) return `${(total / 1024).toFixed(fix)}K`
  if (total < 1024 * 1024 * 1024)
    return `${(total / 1024 / 1024).toFixed(fix)}M`
  return `${(total / 1024 / 1024 / 1024).toFixed(fix)}G`
}

export const copyLinkToClipboard = (str: string) =>
  navigator.clipboard
    .writeText(str)
    .then(() => {
      console.log("copy success")
    })
    .catch((e) => {
      console.log(e)
    })

export const openFile = (id: number) => chrome.downloads.open(id)

export const openFolderOfTargetFile = (id: number) => chrome.downloads.show(id)

export const openFileByState = (file: IFile) => {
  console.log("click file name")

  if (file.error) {
    useMessage(errorTranslateRecord[file.error])
    return
  }
  if (file.state === "complete") {
    openFile(file.id)
  } else {
    openFolderOfTargetFile(file.id)
  }
}

export const resolveDefaultValue = (str: string, backupStr = "未知") =>
  str.length > 0 ? str : backupStr

export const deleteDownloadItemById = (id: number) =>
  chrome.downloads.removeFile(id).then(intervalTask)

export const eraseDownloadItemById = (id: number) =>
  chrome.downloads.erase({ id })

export const downloadResourceByUrl = (url: string) =>
  chrome.downloads.download({ url })

export const resumeDownloadItem = (id: number) => chrome.downloads.resume(id)
