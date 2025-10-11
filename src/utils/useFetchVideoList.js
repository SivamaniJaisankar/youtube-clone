import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEOSLIST_API } from "./constants";
import { setSuggestions } from "./slices/videoSuggestionSlice";



export const useFetchVideoList = (categoryId) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loader = useRef(null);

  const [videoInfo, setVideoInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageToken, setPageToken] = useState(null);

  const  suggestions  = useSelector((state) => state?.videoSuggestion);
  const existingItems = suggestions[categoryId] || [];

  
  const fetchData = async (pageToken='') => {
    setLoading(true);
    setError(null);
    let url = "";
    if (categoryId === 0) {
      url = YOUTUBE_VIDEOSLIST_API + "&pageToken=" + pageToken;
    } else {
      url = YOUTUBE_VIDEOSLIST_API + "&videoCategoryId=" + categoryId + "&pageToken=" + pageToken;
    } 
  
 
      try {
        if (pageToken === '' && categoryId in suggestions) {
        setVideoInfo(existingItems);
        setLoading(false);
        return;
       }

        const data = await fetch(url);
        if (!data.ok)  throw new Error(`${data.status}`);
    
        const json = await data.json();
      
        setVideoInfo((prev) => [...prev, ...json.items]);
        setPageToken(json.nextPageToken);
        const items = [...existingItems, ...json.items]
        dispatch(setSuggestions({ id: categoryId, items: items }));
      } catch (err) {
        console.error("Videos fetch failed:", err);
        setError("Failed to load Videos");
      } finally {
        setLoading(false)
      }
    
  };

  useEffect(() => {
    setVideoInfo([]);
    setPageToken(null);
    fetchData();
  },[categoryId]);

  useEffect(() => {
    if(!loader.current) return;
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && pageToken && !loading){
        fetchData(pageToken)
      }
    }, { threshold: 1})

    observer.observe(loader.current)
    
    return () => observer.disconnect()
    

  },[pageToken, loading])


  return {videoInfo, loading, loader, error};

}