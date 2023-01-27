export default function Loading() {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>`
        }}></div>
      <div className="absolute bottom-[100px] left-[110px] text-gray-500 flash-wrapper">
        正在寻找服务器
      </div>
    </div>
  )
}
