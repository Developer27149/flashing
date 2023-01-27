import {
  AiFillWindows,
  AiOutlineApple,
  AiOutlineDownload
} from "react-icons/ai"

import { FcLinux } from "react-icons/fc"
import Loading from "./Loading"

export default function () {
  const systemIconMap = {
    windows: <AiFillWindows />,
    macOS: <AiOutlineApple />,
    linux: <FcLinux />
  }
  const apps = [
    {
      name: "alfred",
      icon: "https://www.alfredapp.com/media/logo4.png",
      system: ["windows", "macOS", "linux"],
      description: "quick find your app and files or xxxx.eg."
    },
    {
      name: "gmail",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description:
        "google mail for your life and work.Keep in touch with your friends."
    },
    {
      name: "typora",
      icon: "https://typora.io/img/icon_256x256.png",
      system: ["windows", "macOS", "linux"],
      description: "quick find your app and files or xxxx.eg."
    },
    {
      name: "altTab",
      icon: "https://d33wubrfki0l68.cloudfront.net/a006a16dc9b4af9d985b410d7813d2bffe4d51d1/96112/public/android-chrome-256x256.png",
      system: ["windows", "macOS", "linux"],
      description: "quick connect your company with open vpn."
    },
    {
      name: "chrome browser",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EinguwJDjx2V4hVtNf2GtnYGp4OSVbYW9Q&usqp=CAU",
      system: ["windows", "macOS", "linux"],
      description:
        "google mail for your life and work.Keep in touch with your friends."
    },
    {
      name: "openvpn",
      icon: "https://seeklogo.com/images/O/openvpn-logo-1F15BD0826-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description: "quick connect your company with open vpn."
    },
    {
      name: "alfred",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description: "quick find your app and files or xxxx.eg."
    },
    {
      name: "openvpn",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description: "quick connect your company with open vpn."
    },
    {
      name: "gmail",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description:
        "google mail for your life and work.Keep in touch with your friends."
    },
    {
      name: "alfred",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description: "quick find your app and files or xxxx.eg."
    },
    {
      name: "openvpn",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description: "quick connect your company with open vpn."
    },
    {
      name: "gmail",
      icon: "https://seeklogo.com/images/G/gmail-logo-286F380C2D-seeklogo.com.png",
      system: ["windows", "macOS", "linux"],
      description:
        "google mail for your life and work.Keep in touch with your friends."
    }
  ]
  return <Loading />
  return (
    <div className="grid grid-cols-2 pb-4" id="items-wrapper">
      {apps.map(({ name, icon, description, system }, idx) => (
        <div key={idx} className="p-1 gap-1 bg-gray-200">
          <div className="bg-white p-2">
            <img src={icon} className="w-full p-2 h-[100px]" />
            <section className="text-center text-[16px] p-2">{name}</section>
            <span className="opacity-70 text-clamp-2 p-1">{description}</span>
            <div className="flex items-center mt-2 text-[18px]">
              {system?.map((item) => systemIconMap[item])}
              <button className="ml-auto">
                <AiOutlineDownload />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
