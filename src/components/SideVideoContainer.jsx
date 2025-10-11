import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOSLIST_API } from "../utils/constants"
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import {formatNumber} from "../utils/helper"
import { useFetchVideoList } from "../utils/useFetchVideoList";
import VideoCardShimmer from "./VideoCardShimmer";


const SideVideoContainer = () => {
  
  const {videoInfo, loading, error} = useFetchVideoList(0); 

   if(loading) return <VideoCardShimmer />;
   if(error) return <p className="text-center p-4 text-red-500">{error}</p>;


  return (
    <div className="sm:ml-5 sm:mr-3 my-2 shadow-sm rounded-md space-y-5 overflow-y-auto hide-scrollbar">
      <h3 className="text-md font-bold font-roboto p-2">Suggestions...</h3>
      {videoInfo.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <div className="w-11/12 mx-auto my-5 h-32 flex justify-between rounded-md cursor-pointer">
            <img loading='lazy' className="p-2 w-6/12 text-xs rounded-xl" src={v.snippet.thumbnails.medium.url || "/placeholder.jpg"} alt={v.snippet.title || "Video thumbnail"} />
            <div className="w-6/12">
              <p className="m-1 text-xs font-semibold font-roboto">{(v.snippet.title || "").substring(0, 60)}...</p>
              <p className="my-2 text-xs font-light font-roboto">{v.snippet.channelTitle}</p>
              <div className="my-1 flex text-xs font-light font-roboto">
                <p className="mr-4">{formatNumber(v.statistics.viewCount || 0)}</p>
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
