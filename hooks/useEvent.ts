import { intervalTask } from "~utils"
import { searchByQuery } from "~utils/download"
import { store } from "~store"
import { useEffect } from "react"

/**
 * init global download event
 */
export default function useEvent() {
  // Just be easy...
  const { query, speedRecord } = store
  useEffect(() => {
    chrome.downloads.setShelfEnabled(false)
    intervalTask()
    const timer = setInterval(intervalTask, 1 * 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
}
