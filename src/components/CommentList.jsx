import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { formatNumber } from '../utils/helper'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import {formatDistanceToNow} from "date-fns";

const CommentList = ({comment}) => {

  const autheorImage = comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || comment?.snippet?.authorProfileImageUrl;
  const authorName = comment?.snippet?.topLevelComment?.snippet?.authorDisplayName || comment?.snippet?.authorDisplayName;
  const updatedTime = comment?.snippet?.topLevelComment?.snippet?.updatedAt || comment?.snippet?.updatedAt;
  const message = comment?.snippet?.topLevelComment?.snippet?.textOriginal || comment?.snippet?.textOriginal;


  return (
    <div className="w-12/12 flex">
          <div className='w-1/12 mx-auto flex items-center justify-center'>
              <img src={autheorImage} alt='Profile Image' className='rounded-3xl shadow-sm shadow-slate-300 h-9 w-9 text-sm cursor-pointer' />
          </div>
          <div className='w-12/12 my-1 py-1 shadow-sm shadow-slate-300 rounded-md'>
            <div className='flex'>
              <p className='p-1 text-xs font-semibold' >{authorName}</p>
              <p className='p-1 text-xs font-thin' >{formatDistanceToNow( new Date(updatedTime), {addSuffix: true})}</p>
            </div>
            <p className='p-1 text-xs font-normal'>{message}</p>
            <div className="w-1/12 flex justify-between text-lg text-slate-800">
              <AiOutlineLike className='cursor-pointer mx-1 w-10 h-10'/>
              <AiOutlineDislike className='cursor-pointer mx-1 w-10 h-10' />
            </div>
          </div>
        </div>
  )
}

export default CommentList