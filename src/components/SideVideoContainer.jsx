import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOSLIST_API } from "../utils/constants"
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const SideVideoContainer = () => {
  
  const [videoInfo, setVideoInfo] = useState([]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOSLIST_API);
    const json = await data.json();
    setVideoInfo(json.items);
  };

  useEffect(() => {
    fetchData();
    //fetchSearch();
  }, []);

  const formatNumber = (num) => {
    if (num > 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num > 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  };

  return (
    <div className="sm:ml-5 sm:mr-3 my-2 shadow-xs rounded-md space-y-5 overflow-y-scroll hide-scrollbar">
      <h3 className="text-md font-bold font-roboto p-2">Suggestions...</h3>
      {videoInfo.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <div className="w-11/12 mx-auto my-5 h-32 flex justify-between rounded-md cursor-pointer">
            <img className="p-2 w-6/12 text-xs rounded-xl" src={v.snippet.thumbnails.medium.url} alt={v.snippet.title} />
            <div className="w-6/12">
              <p className="m-1 text-xs font-semibold font-roboto">{v.snippet.title.substring(0, 60)}...</p>
              <p className="my-2 text-xs font-light font-roboto">{v.snippet.channelTitle}</p>
              <div className="my-1 flex text-xs font-light font-roboto">
                <p className="mr-4">{formatNumber(v.statistics.viewCount)}</p>
                <p>{formatDistanceToNow(new Date(v.snippet.publishedAt), {addSuffix: true})}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideVideoContainer;
