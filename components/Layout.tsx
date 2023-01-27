import CreateDownloadItem from "./CreateDownloadItem"
import { HiSearch } from "react-icons/hi"
import Menu from "./Menu"
import Message from "~components/Message"
import type { ReactNode } from "react"
import Search from "./Search"
import { TfiTrash } from "react-icons/tfi"
import { VscDiffAdded } from "react-icons/vsc"
import { store } from "~store"

interface IProps {
  children: ReactNode
}
export default function Layout({ children }: IProps) {
  const { searching, showAddDownloadComponent, query } = store
  return (
    <div className="flex flex-col w-[300px] max-h-[600px] h-[800px] bg-[#3273fd] text-white py-3 pb-0">
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
