import { useState, useEffect } from "react"
import { YOUTUBE_COMMENT_API } from "../utils/constants";

export const useFetchVideoComment = (videoId) => {
    
    const [commentInfo, setCommentInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    
  useEffect(() => {
   const fetchVideoComment = async () => {
    try{
        setLoading(true)
        const res = await fetch(YOUTUBE_COMMENT_API + "&videoId=" + videoId);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setCommentInfo(json.items);
    } catch (err) {
        console.error("Comment fetch failed:", err);
        setError("Failed to load Comment");     
    } finally {
        setLoading(false)
    }
    
  };

  fetchVideoComment();
  }, []);

  return { loading, error, commentInfo};
}