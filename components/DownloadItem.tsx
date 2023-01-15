import { BsFolder2Open, BsLink45Deg } from "react-icons/bs"
import { calcDownloadProgress, resolveDownloadFileName } from "~utils/download"
import {
  calcRelativeDate,
  copyLinkToClipboard,
  deleteDownloadItemById,
  eraseDownloadItemById,
  openFileByState,
  openFolderOfTargetFile,
  resolveDefaultValue
} from "~utils"

import DownloadItemType from "./DownloadItemType"
import type { IFile } from "~interfaces"
import { IoIosClose } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useMemo } from "react"

interface IProps {
  item: IFile
}

export default function DownloadItem({ item }: IProps) {
  return (
    <div className="flex items-center gap-2 p-1 my-1 rounded-md border border-purple-50">
      <div className="p-3 border border-[#4363a830] text-[#436368] rounded-full my-container relative overflow-hidden">
        <div className="z-10 relative text-[#3273fd]">
          <DownloadItemType mime={item.mime} />
        </div>
        <div
          className="w-full bg-[#23a71e36] absolute bottom-0 left-0 right-0"
          style={{
            height: `${calcDownloadProgress(
              item.bytesReceived,
              item.totalBytes
            )}`,
            zIndex: 1
          }}></div>
      </div>
      <div className="w-[226px] opacity-80 hover:opacity-100 transition-all">
        <div className="flex gap-1 items-center cursor-pointer">
          <section
            className="ellipsis mr-auto max-w-[205px]"
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
          <div className="text-[12px] transform scale-75 ml-auto">
            {calcRelativeDate(item.startTime)}
          </div>
        </div>
      </div>
    </div>
  )
}
