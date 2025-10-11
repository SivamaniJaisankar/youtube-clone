import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_API} from "../utils/constants"

export const useFetchVideoInfo = (videoId) => {

    const [videoInfo, setVideoInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
useEffect(() => {

    const fetchVideoInfo = async () => {
        try{
        setLoading(true)
        const res = await fetch(YOUTUBE_VIDEO_API + videoId + "&key=" + YOUTUBE_API_KEY);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setVideoInfo(json.items);
        } catch(err){
           console.error("Video info fetch failed:", err);
           setError("Failed to load Video");
        } finally{
         setLoading(false)
        }
      };

      fetchVideoInfo();
      }, [videoId]);

return {loading, error, videoInfo}
}