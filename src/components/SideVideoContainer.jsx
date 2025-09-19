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
    <div className="border border-slate-300 bg-slate-100 ml-5 mr-3 my-2 shadow-sm rounded-md space-y-5 overflow-y-scroll hide-scrollbar">
      {videoInfo.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <div className="w-11/12 mx-auto my-5 h-32 flex justify-between border border-slate-500 bg-slate-100 text-slate-500 rounded-md shadow-xl cursor-pointer">
            <img className="p-2 w-7/12 text-xs rounded-xl" src={v.snippet.thumbnails.medium.url} alt={v.snippet.title} />
            <div className="w-5/12">
              <p className="m-1 text-xs font-semibold">{v.snippet.title.substring(0, 60)}...</p>
              <p className="my-2 text-sm font-light">{v.snippet.channelTitle}</p>
              <div className="my-1 flex text-xs font-thin">
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
