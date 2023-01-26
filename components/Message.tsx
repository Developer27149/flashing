interface IProps {
  msg: string
}

function Message({ msg }: IProps) {
  return (
    <div
      className="fixed top-12 w-[300px] bg-purple-600 text-white p-2 text-center rounded-md"
      id="message">
      {msg ?? "msg"}
    </div>
  )
}
