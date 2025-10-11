import React, {useContext} from 'react'
import MenuContext from "../utils/MenuContext";
import { formatDistanceToNow } from "date-fns";
import { formatNumber } from "../utils/helper";
import { TiEyeOutline } from "react-icons/ti";
import { GrChannel } from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";

const VideoCard = ({v}) => {

   const { theme } = useContext(MenuContext);

  return (
    <div className={`min-h-[19rem] flex flex-col justify-between p-2 rounded-sm w-full max-w-sm hover:shadow-sm hover:shadow-slate-600 shadow-xs shadow-slate-300 cursor-pointer overflow-hidden ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
        <img loading="lazy" className="h-48 p-2 rounded-xl" src={v?.snippet?.thumbnails?.medium?.url || "/placeholder.jpg"} alt={v.snippet.title || "Video thumbnail"} />
        <p className={` my-1 mx-1 font-semibold text-xs font-roboto`}>{v?.snippet?.title || "Untitled Video"}</p>
        <span className="m-1 flex items-center">
            <GrChannel className="text-md mx-1" />
            <p className={`text-xs font-roboto`}>{v.snippet.channelTitle}</p>
        </span>
        <div className="m-1 flex text-xs">
            <span className="mr-4 flex items-center">
                <TiEyeOutline className={`text-xl`} />
                <p>{formatNumber(v.statistics.viewCount)}</p>
            </span>
            <span className="flex items-center">
                <BsClockHistory className={`text-xs mr-1`} />
                <p className = {`font-roboto`}>{formatDistanceToNow(new Date(v.snippet.publishedAt), { addSuffix: true, })}</p>
            </span>
        </div>
    </div>
  )
}

export default React.memo(VideoCard);