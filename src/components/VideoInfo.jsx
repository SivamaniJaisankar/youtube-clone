import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API} from "../utils/constants"
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/helper";
import { AiOutlineLike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";


const VideoInfo = () => {

    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    
    const { videoId } = useParams();
    const [videoInfo, setVideoInfo] = useState([]);
    
    const fetchData = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API + videoId + "&key=" + YOUTUBE_API_KEY);
        const json = await data.json();
        setVideoInfo(json.items);
      };
    
    useEffect(() => {
        fetchData();
      }, []);
  
  
return (
    <div>
      <iframe width="775" height="375"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay"
                allowFullScreen
                className="my-2 rounded-md"
      />
      {videoInfo.map((v) => (
          <div key={v.id}>
            <h2 className="my-1 p-1 text-lg font-semibold">{v.snippet.title}</h2>
            <div className="text-sm flex justify-between">
              <div className="w-6/12 px-4 font-semibold rounded-sm shadow-sm shadow-slate-400 bg-slate-50 text-slate-500 flex items-center">
                <p className="cursor-pointer mr-4 ">{v.snippet.channelTitle}</p>
                <p>{formatDistanceToNow(new Date(v.snippet.publishedAt), {addSuffix: true})}</p>
              </div>
              <div className="w-6/12 p-1 shadow-sm bg-slate-50 text-slate-500 flex justify-between">
                <p className="py-1 px-4 font-semibold rounded-sm shadow-sm shadow-slate-400 bg-slate-50 text-slate-500 cursor-pointer flex items-center justify-between">
                    <AiOutlineLike className="text-lg" />{formatNumber(v.statistics.likeCount)}
                </p>
                <p className="py-1 px-4 font-semibold rounded-sm shadow-sm shadow-slate-400 bg-slate-50 text-slate-500 cursor-pointer flex items-center justify-between">
                  <PiShareFatLight className="text-lg" /> Share
                </p>
                <p className="py-1 px-4 font-semibold rounded-sm shadow-sm shadow-slate-400 bg-slate-50 text-slate-500 cursor-pointer flex items-center justify-between">
                  <TfiDownload className="text-lg" />
                  Download
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default VideoInfo