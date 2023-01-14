import { useEffect, useRef, useState } from "react"

import clsx from "clsx"

interface IProps {
  id: number
}
export default function DownloadProcessCircle({ id }: IProps) {
  const [ratio, setRatio] = useState(0)
  const ref = useRef()
  useEffect(() => {
    console.log("process item:", ref.current)
  }, [])
  return (
    <div ref={ref} className={clsx("w-8 h-8 rounded-full")}>
      {ratio}
    </div>
  )
}
