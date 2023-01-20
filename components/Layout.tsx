import { HiOutlineMenuAlt1, HiSearch } from "react-icons/hi"

import { MacScrollbar } from "mac-scrollbar"
import Menu from "./Menu"
import type { ReactNode } from "react"
import Search from "./Search"
import { TfiTrash } from "react-icons/tfi"
import { store } from "~store"

interface IProps {
  children: ReactNode
}
export default function Layout({ children }: IProps) {
  const { searching } = store
  return (
    <div className="flex flex-col w-[300px] max-h-[600px] h-[800px] bg-[#3273fd] text-white py-3 pb-0">
      <div className="flex justify-between cursor-pointer px-3">
        <HiOutlineMenuAlt1 />
        <HiSearch onClick={() => (store.searching = !searching)} />
      </div>
      {searching && <Search />}
      <MacScrollbar className="flex-grow flex flex-col">
        <div className="flex-grow p-2  bg-white text-gray-700 ">{children}</div>
      </MacScrollbar>
      <Menu />
    </div>
  )
}
