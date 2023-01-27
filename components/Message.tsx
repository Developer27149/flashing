import { FcInfo } from "react-icons/fc"
import { MdClose } from "react-icons/md"
import { motion } from "framer-motion"
import { store } from "~store"
import { useEffect } from "react"

export default function Message() {
  const { message } = store
  useEffect(() => {
    if (message.length > 0) {
      setTimeout(() => {
        store.message = ""
      }, 2000)
    }
  }, [message])
  if (message.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 10, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 w-[200px] bg-white left-[50px] z-50 text-[#3273fd] p-2 gap-2 rounded-sm flex items-center"
      id="message">
      <FcInfo />
      <span className="text-gray-500 flex-grow">{message}</span>
      <MdClose
        className="cursor-pointer"
        onClick={() => (store.message = "")}
      />
    </motion.div>
  )
}
