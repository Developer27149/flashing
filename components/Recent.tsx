import { store } from "~store"
import { calcRelativeDate, copyLinkToClipboard, openFile, openFileByState, openFolderOfTargetFile, rawSizeToHumanSize, resolveDownloadItemFileName } from "~utils"
import { calcDownloadProgress } from "~utils/download"
import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"
import { AiOutlinePauseCircle } from "react-icons/ai"
import { BsLink45Deg } from "react-icons/bs"
import { FcFlashAuto } from "react-icons/fc"
import { TfiDownload } from "react-icons/tfi"

import DownloadItemType from "./DownloadItemType"

export default function Recent() {
  const { items, io, recentFile, speedRecord } = store
  useEffect(() => {
    store.recentFile = items.find(
      (i) =>
        i.state !== "complete" &&
        i.exists &&
        i.bytesReceived > 0 &&
        i.error === undefined
    )
    console.log(store.recentFile)
  }, [items])

  if (!recentFile) return null

  return (
    <div className="relative" id="recent-wrapper">
      <div className="flex justify-between items-center p-1">
        <section className="text-[14px] text-bold flex items-center">
          <FcFlashAuto />
          最新
        </section>
        <span className="opacity-60 scale-75 transform origin-center">
          {calcRelativeDate(recentFile.startTime)}
        </span>
        {/* {recentFile.state === "in_progress" ? (
          <TfiDownload
            className={clsx(
              "animate-bounce",
              "scale-75 transform origin-center"
            )}
          />
        ) : recentFile.state === "complete" ? null : (
          <AiOutlinePauseCircle className="scale-75 transform origin-center" />
        )} */}
      </div>
      <div
        key={recentFile.id}
        className=" bg-[#3273fda0] flex flex-col items-center py-2 pb-[2px] relative rounded-sm gap-1">
        <div
          style={{
            width: `${calcDownloadProgress(
              recentFile.bytesReceived,
              recentFile.totalBytes
            )}`
          }}
          className={clsx(
            "absolute top-0 bottom-0 left-0 h-full bg-[#3273fd] rounded-sm"
          )}></div>
        <div className="flex gap-2 w-full px-2 items-start z-10">
          <div className="p-2 rounded-full bg-[#d8efff] text-[18px]">
            <DownloadItemType mime={recentFile.mime} />
          </div>
          <section
            className="font-bold text-[13px] text-white text-clamp-2 break-all flex-grow cursor-pointer"
            onClick={() => openFileByState(recentFile)}>
            {resolveDownloadItemFileName(recentFile)}
          </section>

          <BsLink45Deg
            onClick={() => copyLinkToClipboard(recentFile.url)}
            className="cursor-pointer text-white"
          />
        </div>
        <section className="text-gray-200 flex items-center w-full px-2 z-10">
          <div className="transform scale-75">
            {calcDownloadProgress(
              recentFile.bytesReceived,
              recentFile.totalBytes
            )}
          </div>
          <div className="text-white transform scale-75">{`${rawSizeToHumanSize(
            speedRecord[recentFile.id] / 1024
          )}/s`}</div>
          <div className="ml-auto">
            {rawSizeToHumanSize(recentFile.fileSize)}
          </div>
        </section>
      </div>
      {/* <section className={clsx(" bg-green-100 h-[20px] w-[50%]")}></section>
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap overflow-ellipsis border border-green-400 px-1 rounded-sm"
        style={{ zIndex: 999 }}>
        {resolveDownloadItemFileName(recentFile)}
      </div> */}
    </div>
  )
}
