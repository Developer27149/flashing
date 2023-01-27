import { ReactNode, useEffect } from "react"

import CreateDownloadItem from "./CreateDownloadItem"
import { HiSearch } from "react-icons/hi"
import Loading from "./appStore/Loading"
import Menu from "./Menu"
import Message from "~components/Message"
import Search from "./Search"
import { Storage } from "@plasmohq/storage"
import { TfiTrash } from "react-icons/tfi"
import { VscDiffAdded } from "react-icons/vsc"
import { store } from "~store"

interface IProps {
  children: ReactNode
}
export default function Layout({ children }: IProps) {
  const { searching, showAddDownloadComponent, query, themeColor } = store

  useEffect(() => {
    const storage = new Storage()
    storage.get("theme").then((value) => {
      if (value) {
        store.themeColor = value
      } else {
        store.themeColor = "#3273fd"
        storage.set("theme", "#3273fd")
      }
    })
  }, [])

  if (themeColor === "")
    return (
      <div className="w-[300px] h-[200px]">
        <Loading raw={true} />
      </div>
    )
  return (
    <div
      style={{ "--theme": themeColor }}
      className="flex flex-col w-[300px] max-h-[600px] h-[800px] bg-[var(--theme)] text-white py-3 pb-0">
      <div className="flex justify-between cursor-pointer px-3 pb-4 text-white text-[16px]">
        <VscDiffAdded
          onClick={() =>
            (store.showAddDownloadComponent = !showAddDownloadComponent)
          }
        />
        <HiSearch
          onClick={() => {
            store.searching = !searching
            store.query = ""
          }}
        />
      </div>
      {searching && <Search />}
      {/* <MacScrollbar className="flex-grow flex flex-col" trackGap={2}>
        <div className="flex-grow p-2  bg-white text-gray-700">{children}</div>
      </MacScrollbar> */}
      <div
        className="flex-grow flex flex-col overflow-scroll"
        id="items-wrapper">
        <div className="flex-grow bg-white text-gray-700">{children}</div>
      </div>
      <Menu />
      <Message />
      <CreateDownloadItem />
    </div>
  )
}
