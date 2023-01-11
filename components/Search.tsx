import { HiSearch } from "react-icons/hi"
import { motion } from "framer-motion"
import { store } from "~store"

export default function Search() {
  const { query } = store
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="rounded-[30px] h-[30px] flex items-center bg-white text-gray-700 mx-4 px-2 my-6">
      <input
        className="border-r border-r-gray-320 px-2 flex-grow mr-2"
        placeholder="Search"
        value={query}
        onChange={(e) => (store.query = e.target.value.trim())}
      />
      <HiSearch className="cursor-pointer" />
    </motion.div>
  )
}
