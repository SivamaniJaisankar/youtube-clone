import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/helper";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import MenuContext from "../utils/MenuContext";

const CommentList = ({ comment }) => {

  const [viewReply, setViewReply] = useState(false);
  const { theme, showSidebar } = useContext(MenuContext);

  const autheorImage =
    comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
    comment?.snippet?.authorProfileImageUrl;
  const authorName =
    comment?.snippet?.topLevelComment?.snippet?.authorDisplayName ||
    comment?.snippet?.authorDisplayName;
  const updatedTime =
    comment?.snippet?.topLevelComment?.snippet?.updatedAt ||
    comment?.snippet?.updatedAt;
  const message =
    comment?.snippet?.topLevelComment?.snippet?.textOriginal ||
    comment?.snippet?.textOriginal;
  const likeCount = comment?.snippet?.topLevelComment?.snippet?.likeCount || comment?.snippet?.likeCount;

  return (
    <div
      className={`w-12/12 ${
        theme === "light"
          ? "bg-white text-slate-800"
          : "bg-slate-800 text-white"
      }`}
    >
      <div className="flex">
        <div className="w-1/12 mx-auto flex items-center justify-center">
          <img
            src={autheorImage}
            alt="Profile Image"
            className="rounded-3xl h-9 w-9 text-sm cursor-pointer"
          />
        </div>
        <div className="w-12/12 my-1 py-1">
          <div className="flex">
            <p className="text-xs font-semibold font-roboto">{authorName}</p>
          
            <p className="text-xs font-light font-roboto">
              {formatDistanceToNow(new Date(updatedTime), { addSuffix: true })}
            </p>
            
          </div>
          <p className="pt-2 text-xs font-normal font-roboto">{message}</p>
          <div className="pt-2 flex items-center">
            <div className="flex items-center mr-2">
              <AiOutlineLike className="cursor-pointer pr-1 w-5 h-5" />
              <p className="text-xs font-roboto">{likeCount}</p>
            </div>
            <AiOutlineDislike className="cursor-pointer w-4 h-4" />
          </div>
        </div>
      </div>


      <div className="p-1 ml-16">
        {typeof comment?.replies === "object" &&
          comment?.replies?.comments.length != 0 && (
            <>
            <p 
              className="text-xs font-semibold text-blue-400 cursor-pointer"
              onClick={() => {setViewReply(!viewReply)}}
            >
              {viewReply ? 'Hide Reply' : 'View Reply...'}
            </p>
            {viewReply && comment?.replies?.comments.map((c) =>(
              <CommentList comment={c}/>
            ))}
            </>
          )}
      </div>
    </div>
  );
};

export default CommentList;
