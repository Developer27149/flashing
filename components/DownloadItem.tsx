import { BsFolder2Open, BsLink45Deg } from "react-icons/bs"
import {
  calcDownloadProgress,
  calcSizeForHuman,
  deleteDownloadItemById,
  eraseDownloadItemById,
  resolveDownloadFileName,
  resumeDownloadItem
} from "~utils/download"
import {
  calcRelativeDate,
  copyLinkToClipboard,
  openFileByState,
  openFolderOfTargetFile,
  resolveDefaultValue
} from "~utils"

import { BiRefresh } from "react-icons/bi"
import DownloadItemType from "./DownloadItemType"
import type { IFile } from "~interfaces"
import { IoIosClose } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import clsx from "clsx"
import { errorTranslateRecord } from "~utils/error"
import { useMemo } from "react"

interface IProps {
  item: IFile
}

export default function DownloadItem({ item }: IProps) {
  return (
    <div className="flex items-center gap-2 py-1 my-1 rounded-md border border-purple-100 relative overflow-hidden">
      {/* <div className="p-3 border border-[#4363a830] text-[#436368] rounded-full my-container relative overflow-hidden">
        <div className="z-10 relative text-[#3273fd]">
          <DownloadItemType mime={item.mime} />
        </div>
        <div
          className="w-full bg-[#1e59a736] absolute bottom-0 left-0 right-0"
          style={{
            height: `${calcDownloadProgress(
              item.bytesReceived,
              item.totalBytes
            )}`,
            zIndex: 1
          }}></div>
      </div> */}
      {item.state === "in_progress" && (
        <>
          <div
            className="absolute bottom-0 h-[4px] bg-[#3273fd50]"
            style={{
              width: calcDownloadProgress(item.bytesReceived, item.totalBytes)
            }}></div>
          <div
            className="absolute bottom-0 right-0 h-[4px] bg-[#3273fd20]"
            style={{
              width: calcDownloadProgress(
                item.bytesReceived,
                item.totalBytes,
                true
              )
            }}></div>
        </>
      )}
      <div
        className={clsx(
          "p-1 text-[20px] z-10",
          item.exists ? "text-[#3273fd]" : "text-gray-400"
        )}>
        <DownloadItemType mime={item.mime} />
      </div>
      <div className="flex-grow transition-all">
        <div className="flex gap-1 items-center cursor-pointer">
          <section
            className={clsx("ellipsis mr-auto max-w-[220px] z-10", {
              "line-through opacity-50": item.exists === false || item.error
            })}
            onClick={() => openFileByState(item)}>
            {resolveDownloadFileName(item.filename)}
          </section>
          <IoIosClose
            size={16}
            className="opacity-50 hover:opacity-100 text-[#3273fd] transition-colors"
            onClick={() => eraseDownloadItemById(item.id)}
          />
        </div>
        {/* <section className="ellipsis text-[12px] opacity-60 transform scale-75 origin-left">
          {resolveDefaultValue(item.url)}
        </section> */}
        <div className="flex items-center gap-2 mt-1 opacity-30 hover:opacity-100 transition-all cursor-pointer">
          <BsFolder2Open onClick={() => openFolderOfTargetFile(item.id)} />
          <BsLink45Deg onClick={() => copyLinkToClipboard(item.url)} />
          <RiDeleteBin6Line onClick={() => deleteDownloadItemById(item.id)} />
          {item.canResume && (
            <BiRefresh onClick={() => resumeDownloadItem(item.id)} />
          )}
          {item.error && (
            <div className="text-[12px] transform scale-75">
              {errorTranslateRecord[item.error]}
            </div>
          )}
          <div className="text-[12px] transform scale-75 ml-auto">
            {calcRelativeDate(item.startTime)}&nbsp;
            {calcSizeForHuman(item.totalBytes)}
          </div>
        </div>
      </div>
    </div>
  )
}
