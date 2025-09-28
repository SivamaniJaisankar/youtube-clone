import React, { useState, useContext } from "react";
import VideoInfo from "./VideoInfo"
import Comment from "./Comment";
import SideVideoContainer from "./SideVideoContainer";
import LiveChat from "./LiveChat";
import MenuContext from "../utils/MenuContext";


const WatchPage = () => {
  
  const { theme, showSidebar, isMobile } = useContext(MenuContext); 
  const [commentFlag, setCommentFlag] = useState(false);
  const [liveChatFlag, setLiveChatFlag] = useState(false)
  
  return (
    <div className={`w-12/12 flex flex-col sm:flex-row ${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
      <div className="sm:shadow-md sm:w-7/12 sm:ml-20 sm:mr-5 my-2 p-2 rounded-md">      
        <VideoInfo />

        {(isMobile && commentFlag) && 
          (<button className="p-1 mt-5 mb-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
        onClick={()=>setCommentFlag(false)}
        >Hide Comments</button>)}
         
         {(isMobile && liveChatFlag) && 
          (<button className="py-1 px-3 mt-5 mb-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
        onClick={()=>setLiveChatFlag(false)}
        >Hide Chat</button>)}

        {(!isMobile || (isMobile && commentFlag)) 
          ? <Comment /> 
          : ((!liveChatFlag) && (<button className="p-1 mt-5 mb-3 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
        onClick={()=> { setCommentFlag(true); setLiveChatFlag(false)}}
        >Show Comments</button>))}


      </div>
      <div className="sm:border sm:border-slate-200 rounded-md sm:m-3">
         {(!isMobile || (isMobile && liveChatFlag)) 
         ?(<LiveChat />) 
         :((!commentFlag) &&  
            (<button 
              className="px-7 py-1 mx-2 mt-3 mb-5 bg-slate-600 text-white rounded-md text-sm font-roboto outline-0"
              onClick={() => {setLiveChatFlag(true); setCommentFlag(false)}}
            >
          Show Chat</button>))}
        
        
        {(!isMobile || (isMobile && !commentFlag)) && <SideVideoContainer />} 
      </div>
    </div>
  );
};

export default WatchPage;
