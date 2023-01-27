import { useEffect, useState } from "react"

import { AiOutlineArrowDown } from "react-icons/ai"
import { downloadResourceByUrl } from "~utils/download"
import { store } from "~store"

export default function CreateDownloadItem() {
  const { downloadUrl, showAddDownloadComponent } = store
  const [info, setInfo] = useState("")
  const onCancel = () => {
    store.downloadUrl = ""
    setInfo("")
    store.showAddDownloadComponent = false
  }
  const onStartAction = () => {
    if (downloadUrl.trim().length === 0) {
      setInfo("下载链接无效")
    } else {
      downloadResourceByUrl(downloadUrl)
      onCancel()
    }
  }

  useEffect(() => {})

  if (showAddDownloadComponent === false) return null
  return (
    <div
      className="fixed inset-0 z-40 bg-[#eeeeee60]"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onCancel()
      }}>
      <div
        className="absolute top-64 w-[280px] mx-[10px] z-30 rounded-sm border border-[#3273fd] bg-white text-gray-500"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center m-2 gap-1 text-[#3273fd]">
          <AiOutlineArrowDown />
          <div>新建下载</div>
        </div>
        <textarea
          className="w-[94%] block mx-auto p-2 h-[70px] max-h-[120px] outline-none bg-gray-100 overflow-hidden"
          value={downloadUrl}
          onFocus={() => setInfo("")}
          onChange={(e) => (store.downloadUrl = e.target.value.trim())}
          placeholder="下载链接..."
        />
        <div className="flex items-center gap-2 justify-end p-2 text-[12px] relative scale-[0.8] origin-right">
          {info.length > 0 && (
            <span className="mr-auto relative right-16 text-red-400">
              {info}
            </span>
          )}
          <button onClick={onCancel}>取消</button>
          <button
            onClick={onStartAction}
            className="bg-[#3273fd] text-white p-1 rounded-sm">
            确定
          </button>
        </div>
      </div>
    </div>
  )
}
