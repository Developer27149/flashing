import { useEffect, useMemo, useState } from "react"

import DownloadItem from "./DownloadItem"
import { store } from "~store"

export default function DownloadItems() {
  const { items, recentFile, query } = store
  const currentItems = useMemo(() => {
    console.log(items, recentFile);
    
    return items.filter(
      (item) => item.filename.includes(query) && item.id !== recentFile?.id && item.exists && item.filename.length > 0
    )
  }, [items, recentFile, query])
  if (currentItems.length === 0) return <div>null</div>
  return (
    <>
      currentItems?.map((item) => <DownloadItem item={item} key={item.id} />)}
    </>
  )
}
