import { IoIosFlash, IoIosSettings } from "react-icons/io"

import { AiOutlineArrowDown } from "react-icons/ai"
import { CiBeerMugFull } from "react-icons/ci"
import { FcPodiumWithAudience } from "react-icons/fc"
import { VscRunErrors } from "react-icons/vsc"
import clsx from "clsx"
import { motion } from "framer-motion"
import { store } from "~store"

export default function Menu() {
  const { menu } = store
  const iconMap = {
    in_progress: <AiOutlineArrowDown />,
    interrupted: <VscRunErrors />,
    all: <IoIosFlash />,
    completed: <CiBeerMugFull />,
    setting: <IoIosSettings />
  }
  return (
    <div className="flex items-center px-1 justify-evenly z-20">
      {Object.keys(iconMap).map((key, idx) => (
        <motion.div
          key={idx}
          style={{ border: menu === key ? "6px solid #3273fd" : "" }}
          animate={{ y: menu === key ? -10 : 0, scale: menu === key ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => (store.menu = key)}
          className={clsx(
            "p-2 rounded-full text-[18px] relative border-[#3273fd] cursor-pointer",
            {
              "opacity-50": menu !== key,
              "bg-white text-[#3273fd]": menu === key,
              "text-white": menu !== key
            }
          )}>
          {iconMap[key]}
        </motion.div>
      ))}
    </div>
  )
}
