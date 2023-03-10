import AppStore from "./appStore"
import Contact from "./Contact"
import DownloadItems from "./DownloadItems"
import Recent from "./Recent"
import { store } from "~store"
import useEvent from "~hooks/useEvent"
import { useMemo } from "react"

export default function Main() {
  const { menu } = store
  useEvent()
  const component = useMemo(() => {
    if (menu === "all") return <DownloadItems />
    if (menu === "in_progress") return <DownloadItems status={"in_progress"} />
    if (menu === "interrupted") return <DownloadItems status={"interrupted"} />
    if (menu === "contact") return <Contact />
    return <AppStore />
  }, [menu])

  return component
}
