import DownloadItemType from "./DownloadItemType"
import type { IFile } from "~interfaces"
import { resolveDefaultValue } from "~utils"
import { resolveDownloadFileName } from "~utils/download"
import { useMemo } from "react"

interface IProps {
  item: IFile
}

export default function DownloadItem({ item }: IProps) {
  return (
    <div className="flex items-center gap-2 p-1 my-1 rounded-md border border-purple-50">
      <DownloadItemType mine={item.mime} />
      <div className="flex-grow">
        <section className="ellipsis" style={{ maxWidth: "243px" }}>
          {resolveDownloadFileName(item.filename)}
        </section>
        <section className="ellipsis text-[12px] opacity-60 transform scale-75 origin-left">
          {resolveDefaultValue(item.referrer)}
        </section>
      </div>
      {/* <div>status</div> */}
    </div>
  )
}
