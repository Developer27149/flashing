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
      className="rounded-[30px] flex items-center bg-white text-gray-700 px-2 my-6 mx-8 leading-[32px] h-[32px]">
      <input
        className="border-none px-2 flex-grow outline-none leading-[32px] h-[32px] rounded-md"
        placeholder="呃..."
        value={query}
        onChange={(e) => (store.query = e.target.value.trim())}
      />
      {/* <HiSearch className="cursor-pointer" /> */}
    </motion.div>
  )
}
