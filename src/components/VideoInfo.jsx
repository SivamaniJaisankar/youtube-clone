import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/helper";
import { AiOutlineLike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import MenuContext from "../utils/MenuContext";
import { useFetchVideoInfo } from "../utils/useFetchVideoInfo";


const VideoInfo = () => {
 
    const { isMobile } = useContext(MenuContext); 
    const { videoId } = useParams();
   
    const { videoInfo, loading, error } = useFetchVideoInfo(videoId);

    if (loading) return <p className="text-center p-4">Loading video...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

return (
    <div>
      <iframe width={`${isMobile ? '375' : '750'}`} height={`${isMobile ? '275' : '375'}`}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay"
                allowFullScreen
                className="my-2 rounded-md"
      />
      {videoInfo.map((v) => (
          <div key={v.id}>
            <h2 className="my-1 p-1 w-full text-sm sm:text-md font-roboto font-semibold">{v.snippet.title}</h2>
            <div className="text-xs sm:text-sm flex justify-between">
              <div className="w-4/12 sm:w-6/12 pr-4 font-semibold font-roboto flex items-center">
                <p className="cursor-pointer sm:mr-2 px-2 py-1 text-xs sm:text-md rounded-md">{v.snippet.channelTitle}</p>
                <p className="text-xs">{formatDistanceToNow(new Date(v.snippet.publishedAt), {addSuffix: true})}</p>
              </div>
              <div className="w-8/12 sm:w-6/12 p-1 flex justify-end sm:justify-between">
                <p className="py-1 px-3 sm:px-4 font-semibold font-roboto text-xs sm:text-md cursor-pointer flex items-center justify-between">
                    <AiOutlineLike className="text-xs sm:text-lg" />{formatNumber(v.statistics.likeCount) || 0}
                </p>
                <p className="py-1 px-3 sm:px-4 font-semibold font-roboto text-xs sm:text-md cursor-pointer flex items-center justify-between">
                  <PiShareFatLight className="text-xs sm:text-lg" /> Share
                </p>
                <p className="py-1 px-3 sm:px-4 font-semibold font-roboto text-xs sm:text-md cursor-pointer flex items-center justify-between">
                  <TfiDownload className="text-xs sm:text-lg" />
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