import { store } from "~store"

export default function Recent() {
  const { items, defaultDownloadPath } = store
  return (
    <div>
      <div className="font-bold text-md">RECENT</div>
      <div className="grid grid-cols-3 gap-2">
        {items.slice(0, 3).map((i) => (
          <section className="break-all" key={i.filename}>
            {i.filename.replace(defaultDownloadPath, "")}
          </section>
        ))}
      </div>
    </div>
  )
}
