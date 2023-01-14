import {
  BsCameraVideo,
  BsFileEarmarkArrowDown,
  BsFilePpt
} from "react-icons/bs"
import { CiImageOn, CiStreamOn } from "react-icons/ci"

import { GiMusicalNotes } from "react-icons/gi"
import { GoFileZip } from "react-icons/go"
import type { IFile } from "~interfaces"
import { ImFilePdf } from "react-icons/im"
import { RiFileWord2Line } from "react-icons/ri"
import { SiMicrosoftpowerpoint } from "react-icons/si"
import { SlBookOpen } from "react-icons/sl"
import { TfiVideoClapper } from "react-icons/tfi"

interface IProps {
  mime: IFile["mime"]
}
export default function DownloadItemType({ mime }: IProps) {
  const iconMap = {
    "video/mp4": <TfiVideoClapper />,
    "audio/mpeg": <GiMusicalNotes />,
    "image/jpeg": <CiImageOn />,
    "video/x-msvideo": <BsCameraVideo />,
    "application/msword": <RiFileWord2Line />,
    "application/epub+zip": <SlBookOpen />,
    "application/gzip": <GoFileZip />,
    "application/pdf": <ImFilePdf />,
    "application/vnd.ms-powerpoint": <SiMicrosoftpowerpoint />,
    "application/vnd.rar": <GoFileZip />,
    "application/x-7z-compressed": <GoFileZip />,
    "application/octet-stream": <TfiVideoClapper />
  }

  return iconMap[mime] ?? <CiStreamOn />
}
