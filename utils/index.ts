import "dayjs/locale/zh-cn"

import type { IFile } from "~interfaces"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
dayjs.locale("zh-cn")

export const calcRelativeDate = (dateNumber: number) => {
  return dayjs(dateNumber).fromNow()
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
  navigator.clipboard.writeText(str)

export const openFile = (id: number) => chrome.downloads.open(id)

export const openFolderOfTargetFile = (id: number) => chrome.downloads.show(id)

export const openFileByState = (file: IFile) => {
  if (file.state === "complete") {
    openFile(file.id)
  } else {
    openFolderOfTargetFile(file.id)
  }
}

export const resolveDefaultValue = (str: string, backupStr = "未知") =>
  str.length > 0 ? str : backupStr
