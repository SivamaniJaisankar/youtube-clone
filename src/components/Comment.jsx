import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENT_API} from "../utils/constants"
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";


const Comment = () => {

   const YOUTUBE_API_KEY =import.meta.env.VITE_YOUTUBE_API_KEY;
  
  const { videoId } = useParams();
  const [commentInfo, setCommentInfo] = useState([]); 
  const [viewReply, setViewReply] = useState(false);


 const fetchCommentData = async () => {
        const data = await fetch(YOUTUBE_COMMENT_API + '&videoId=' + videoId)
        const json = await data.json();
        console.log(json.items);
        setCommentInfo(json.items);    
      }
  
      useEffect(()=>{
        fetchCommentData();
      },[])

  return (
<div className='my-10 h-screen'>
          <h3 className="text-md font-bold">Comments...</h3>
          {commentInfo.map((c)=> (
            <div key={c.id}>
            <div className='w-12/12 my-3 flex flex-col text-slate-800'>
              <CommentList comment={c}/>
              </div>
                         
              {(!viewReply && typeof c?.replies === "object" && c?.replies?.comments?.length != 0) && 
                (<p className='w-10/12 my-1 ml-20 flex text-sm font-semibold text-blue-400 cursor-pointer' onClick={() => setViewReply(true)}>View Reply...</p>)}
                            
              
              {(viewReply && c?.replies?.comments?.length != 0) &&  
                  (
                  <>
                  <p className='w-10/12 my-1 ml-20 flex text-sm font-semibold text-blue-400 cursor-pointer' onClick={() => setViewReply(false)}>Hide Reply...</p>
                  {c?.replies?.comments.map((r)=> (
                        <div key={r.id} className='w-10/12 my-1 ml-20 flex text-slate-800'>
                            <CommentList comment={r}/>
                        </div>
                    ))}
                  </>
              )}
            </div>
          ))}
        </div>

   
  )
}

export default Comment