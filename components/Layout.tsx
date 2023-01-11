import { HiOutlineMenuAlt1, HiSearch } from "react-icons/hi"

import { MacScrollbar } from "mac-scrollbar"
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
    <div className="flex flex-col w-[280px] max-h-[600px] min-h-[200px] bg-[#3273fd] text-white py-3">
      <div className="flex justify-between cursor-pointer px-3">
        <HiOutlineMenuAlt1 />
        <HiSearch onClick={() => (store.searching = !searching)} />
      </div>
      {searching && <Search />}
      <MacScrollbar>
        <div className="flex-grow p-2 pt-3 bg-white text-gray-700 rounded-t-[16px]">
          {children}
        </div>
      </MacScrollbar>
      <div>footer</div>
    </div>
  )
}
