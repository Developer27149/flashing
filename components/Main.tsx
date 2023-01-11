import Recent from "./Recent"
import { searchByQuery } from "~utils/download"
import { store } from "~store"
import { useEffect } from "react"

export default function Main() {
  useEffect(() => {
    chrome.downloads.onCreated.addListener(async () => {
      // when created a new download item
      store.items = await searchByQuery()
    })
    searchByQuery()
      .then((items) => {
        store.items = items
        store.defaultDownloadPath =
          items.length > 0 ? items[0].filename.match(/\/.*\//)?.[0] : ""
        console.log(items.slice(0, 1))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <h1>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h1>
      <Recent />
    </>
  )
}
