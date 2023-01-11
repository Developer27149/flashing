import { store } from "~store"

export default resolveDownloadFileName = (name: string) =>
  name.replace(store.defaultDownloadPath, "")
