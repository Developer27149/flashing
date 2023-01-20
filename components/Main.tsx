import DownloadItems from "./DownloadItems"
import Recent from "./Recent"
import useEvent from "~hooks/useEvent"

export default function Main() {
  useEvent()
  return (
    <>
      {/* <Recent /> */}
      <DownloadItems />
    </>
  )
}
