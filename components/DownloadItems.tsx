import { useEffect, useMemo, useState } from "react"

import DownloadItem from "./DownloadItem"
import { store } from "~store"

export default function DownloadItems() {
  const { items, recentFile, query } = store

  const currentItems = useMemo(() => {
    return items.filter(
      (item) => item.filename.includes(query) && item.filename.length > 0
    )
  }, [items, recentFile, query])
  useEffect(() => {
    console.log(currentItems)
  }, [currentItems])
  if (currentItems.length === 0) return <div>null</div>
  return (
    <div className="pb-4">
      {currentItems.length > 0 &&
        currentItems.map((i) => {
          return <DownloadItem item={i} key={i.id} />
        })}
    </div>
  )
}
