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
    return items.filter((item) =>
      item.filename.includes(query) &&
      item.filename.length > 0 &&
      status !== undefined
        ? item.state === status
        : true
    )
  }, [items, recentFile, query])
  useEffect(() => {
    console.log(currentItems)
  }, [currentItems])
  if (currentItems.length === 0)
    return (
      <div>
        <img src={EmptySvg} />
        <section className="opacity-60 text-center py-8">空落落的...</section>
      </div>
    )
  return (
    <div className="pb-4">
      {currentItems.length > 0 &&
        currentItems.map((i) => {
          return <DownloadItem item={i} key={i.id} />
        })}
    </div>
  )
}
