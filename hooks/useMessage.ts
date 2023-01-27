import Message from "~components/Message"
// import { createPortal } from "react-dom"
import { createRoot } from "react-dom/client"

/**
 * 描述 show a message
 * @date 2023-01-26
 * @param {any} msg:string
 * @returns {any}
 */
export const useMessage = (msg: string) => {
  console.log("show message!")
  const root = createRoot(document.getElementById("root"))
  document.querySelector("#message")?.remove()
  // root.render(<Message />)
  // createPortal(<Message msg={msg} />, document.body)
}
