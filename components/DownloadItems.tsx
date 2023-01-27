import { useEffect, useMemo, useState } from "react"

import DownloadItem from "./DownloadItem"
import type { DownloadState } from "~interface/help"
import EmptySvg from "~assets/empty.svg"
import { store } from "~store"

interface IProps {
  status?: DownloadState
}

export default function DownloadItems({ status }: IProps) {
  const { items, recentFile, query } = store

  const currentItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.filename.includes(query) &&
        (status !== undefined ? item.state === status : true)
    )
  }, [items, recentFile, query])
  useEffect(() => {
    const count = currentItems.filter((i) => i.state === "in_progress").length
    if (count > 0) {
      chrome.action.setBadgeText({
        text: `${count}`
      })
    }
  }, [currentItems])
  if (currentItems.length === 0)
    return (
      <div>
        <img src={EmptySvg} />
        <section className="opacity-60 text-center py-8">
          暂无{status === "in_progress" ? "正在下载的项目" : "下载出错的项目"}
        </section>
      </div>
    )
  return (
    <div className="p-2 pb-4">
      {currentItems.length > 0 &&
        currentItems.map((i) => {
          return <DownloadItem item={i} key={i.id} />
        })}
    </div>
  )
}
