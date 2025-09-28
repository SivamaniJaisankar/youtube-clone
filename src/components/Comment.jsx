import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const Comment = () => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const { videoId } = useParams();
  const [commentInfo, setCommentInfo] = useState([]);
  const [commentId, setCommentId] = useState(null);

  const fetchCommentData = async () => {
    const data = await fetch(YOUTUBE_COMMENT_API + "&videoId=" + videoId);
    const json = await data.json();
    setCommentInfo(json.items);
  };

  useEffect(() => {
    fetchCommentData();
  }, []);

  return (
    <div className="my-10 h-screen">
      <h3 className="text-md font-bold font-roboto">Comments...</h3>
      {commentInfo.map((c) => (
        <div key={c.id}>
          <div className="w-12/12 my-2 flex flex-col text-slate-800">
            <CommentList comment={c} />   
          </div>         
        </div>
      ))}
    </div>
  );
};
export default Comment;
