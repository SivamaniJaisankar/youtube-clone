import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContext from "../utils/MenuContext";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";
import { useFetchVideoList } from "../utils/useFetchVideoList";

const VideoContainer = ({ categoryId }) => {

  const { showSidebar } = useContext(MenuContext);
  
  const { videoInfo, loading,loader, error } = useFetchVideoList(categoryId);

  if(error) return <p className="text-center p-4 text-red-500">{error}</p>;
  
  
  return (
    <div className="flex flex-col">
    <div className={`grid gap-8 w-96 sm:w-full ${showSidebar ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-4"}`}>
      {videoInfo?.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <VideoCard v={v}/>
        </Link>
      ))}   
    </div>
    {loading && (<VideoCardShimmer />) }
    <div ref={loader} />
    </div>
  );
};

export default VideoContainer;
