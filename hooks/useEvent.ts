import { searchByQuery } from "~utils/download"
import { store } from "~store"
import { useEffect } from "react"

/**
 * init global download event
 */
export default function useEvent() {
  // Just be easy...
  const { query, speedRecord } = store
  const intervalTask = async () => {
    const _items = await searchByQuery()
    store.items = _items
    _items.forEach(({ bytesReceived, id, state }) => {
      if (state === "in_progress") {
        console.log(speedRecord[id])
        store.speedRecord[id] = bytesReceived - (speedRecord[id] ?? 0)
      } else {
        store.speedRecord[id] = undefined
      }
    })
  }
  useEffect(() => {
    chrome.downloads.setShelfEnabled(false)
    intervalTask()
    const timer = setInterval(intervalTask, 1 * 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
}
