import type { DownloadItem } from "~interface/help"

export type TRawDownloadItem = chrome.downloads.DownloadItem[]
export type TRawDownloadSearchQuery = chrome.downloads.DownloadQuery

// export type TFileType = "file" | "video" | "audio" | "other"
export enum EDownloadStatus {
  downloading,
  done,
  error,
  cancel
}

export interface IFile extends DownloadItem {
  // type: TFileType
  // size: number
  // createdAt: number
  // name: string
  // from: string
  // status: EDownloadStatus
  // isHidden: boolean
}

/**
 * file example
 */

const demo = {
  bytesReceived: 1672717404,
  canResume: false,
  danger: "safe",
  endTime: "2023-01-11T13:37:37.581Z",
  exists: true,
  fileSize: 1672717404,
  filename:
    "/Users/aaron/Desktop/IPX-980 同窓会で再会したかつて愛した男とのセックスに溺れ中出し最低不倫を繰り返すワタシ… 胸糞NTR オンナを虜にするのは愛でも金でもなくSEX！ 櫻空桃.mp4",
  finalUrl:
    "https://s8.youtube4kdownloader.com/download7/pl/1jx88w093q/v0/av/c0/cdb4/cd4",
  id: 162,
  incognito: false,
  mime: "video/mp4",
  paused: false,
  referrer: "https://youtube4kdownloader.com/",
  startTime: "2023-01-11T13:17:55.587Z",
  state: "complete",
  totalBytes: 1672717404,
  url: "https://youtube4kdownloader.com/download7/pl/1jx88w093q/v0/av/c0/cdb4/cd4"
}
