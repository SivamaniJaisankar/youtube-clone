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
    <div className={`h-72 mx-2 flex flex-col justify-between hover:shadow-xs hover:shadow-slate-600 shadow-xs shadow-slate-300 rounded-sm cursor-pointer overflow-y-scroll hide-scrollbar ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
        <img className="h-48 p-2 rounded-xl" src={v?.snippet?.thumbnails?.medium?.url} alt={v.snippet.title} />
        <p className={` my-1 mx-1 font-semibold text-xs font-roboto`}>{v.snippet.title}</p>
        <span className="m-1 flex items-center">
            <GrChannel className="text-md mx-1" />
            <p className={`text-xs font-roboto`}>{v.snippet.channelTitle}</p>
        </span>
        <div className="m-1 flex text-xs text-slate-700">
            <span className="mr-4 flex items-center">
                <TiEyeOutline className={`text-xl`} />
                <p>{formatNumber(v.statistics.viewCount)}</p>
            </span>
            <span className="flex items-center text-slate-700">
                <BsClockHistory className={`text-xs mr-1`} />
                <p className = {`font-roboto`}>{formatDistanceToNow(new Date(v.snippet.publishedAt), { addSuffix: true, })}</p>
            </span>
        </div>
    </div>
  )
}

export default VideoCard