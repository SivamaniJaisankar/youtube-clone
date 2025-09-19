import React from "react";
import VideoInfo from "./VideoInfo"
import Comment from "./Comment";
import SideVideoContainer from "./SideVideoContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  
  
  return (
    <div className="w-12/12 flex">
      <div className="shadow-md w-7/12 ml-20 mr-5 my-2 rounded-md">      
        <VideoInfo />
        <Comment /> 
      </div>
      <div className="border border-slate-300 rounded-xl m-3">
        <LiveChat />
        <SideVideoContainer /> 
      </div>
    </div>
  );
};

export default WatchPage;
