import React, { useContext } from "react";
import VideoInfo from "./VideoInfo"
import Comment from "./Comment";
import SideVideoContainer from "./SideVideoContainer";
import LiveChat from "./LiveChat";
import MenuContext from "../utils/MenuContext";


const WatchPage = () => {
  
  const { theme, showSidebar } = useContext(MenuContext); 
  
  return (
    <div className={`w-12/12 flex ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
      <div className="shadow-md w-7/12 ml-20 mr-5 my-2 p-2 rounded-md">      
        <VideoInfo />
        <Comment /> 
      </div>
      <div className="border border-slate-200 rounded-md m-3">
        <LiveChat />
        <SideVideoContainer /> 
      </div>
    </div>
  );
};

export default WatchPage;
