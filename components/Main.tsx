import DownloadItem from "./DownloadItem"
import Recent from "./Recent"
import { resolveDownloadItemFileName } from "~utils"
import { searchByQuery } from "~utils/download"
import { store } from "~store"
import { useEffect } from "react"
import useEvent from "~hooks/useEvent"

export default function Main() {
  const { items, query } = store
  useEffect(() => {
    const _items = items.filter((i) => i.filename.indexOf(query) !== -1)
    console.log(_items)
  }, [query, items])
  useEvent()
  return (
    <>
      <Recent />
      {items.length > 0 &&
        items
          .filter(
            (i) =>
              i.filename.includes(query) && i.exists && i.filename.length > 0
          )
          .map((item) => <DownloadItem item={item} key={item.id} />)}
    </>
  )
}
