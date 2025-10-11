import React, { useState, useContext } from "react";
import VideoInfo from "./VideoInfo"
import Comment from "./Comment";
import SideVideoContainer from "./SideVideoContainer";
import LiveChat from "./LiveChat";
import MenuContext from "../utils/MenuContext";


const WatchPage = () => {
  
  const { theme, isMobile } = useContext(MenuContext); 
  const [commentFlag, setCommentFlag] = useState(false);
  const [liveChatFlag, setLiveChatFlag] = useState(false);


  const hideComment = isMobile && commentFlag;
  const hideChat = isMobile && liveChatFlag;
  const showComment = !isMobile || (isMobile && commentFlag);
  const showChat = !isMobile || (isMobile && liveChatFlag);


 const themeClass = theme === "light" ? "bg-white text-slate-800" : "bg-slate-800 text-white";
  
  return (
    <div className={`w-full flex flex-col sm:flex-row ${themeClass}`}>
      <div className="sm:shadow-md sm:w-7/12 sm:ml-20 sm:mr-5 my-2 p-2 rounded-md">      
        <VideoInfo />

        {(hideComment) && 
          (<button className="p-1 mt-5 mb-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
        onClick={()=>setCommentFlag(false)}
        >Hide Comments</button>)}
         
         {(hideChat) && 
          (<button className="py-1 px-3 mt-5 mb-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
        onClick={()=>setLiveChatFlag(false)}
        >Hide Chat</button>)}

        {(showComment) 
          ? <Comment /> 
          : ((!liveChatFlag) && (
          <div className="flex justify-center">
            <button 
              className="p-1 mt-5 w-52 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
              onClick={()=> { setCommentFlag(true); setLiveChatFlag(false)}}>Show Comments</button>
        </div>))}


      </div>
      <div className="sm:border sm:border-slate-200 rounded-md sm:m-3">
         {(showChat) 
         ?(<LiveChat />) 
         :((!commentFlag) &&  (
         <div className="flex justify-center">
          <button 
              className="px-7 py-1 w-52 mx-2 mt-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
              onClick={() => {setLiveChatFlag(true); setCommentFlag(false)}}>
          Show Chat</button>
        </div>))}
        
        
        {(!isMobile || (!commentFlag && !liveChatFlag)) && <SideVideoContainer />} 
      </div>
    </div>
  );
};

export default WatchPage;
