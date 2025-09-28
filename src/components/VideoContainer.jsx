import React, { useContext, useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOSLIST_API } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestions } from "../utils/slices/videoSuggestionSlice";
import MenuContext from "../utils/MenuContext";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = ({ categoryId }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { theme, showSidebar } = useContext(MenuContext);
  const  suggestions  = useSelector((state) => state?.videoSuggestion);
  const existingItems = suggestions[categoryId] || [];
  

  const loader = useRef(null)
  const [videoInfo, setVideoInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState(null);


  const fetchData = async (pageToken='') => {
    setLoading(true);

    let url = "";
    if (categoryId === 0) {
      url = YOUTUBE_VIDEOSLIST_API + "&pageToken=" + pageToken;
    } else {
      url = YOUTUBE_VIDEOSLIST_API + "&videoCategoryId=" + categoryId + "&pageToken=" + pageToken;
    } 

    
    if (pageToken === '' && categoryId in suggestions) {
      setVideoInfo(existingItems);
    } else {
      try {
        const data = await fetch(url);
        if (!data.ok)  throw new Error(`${data.status}`);
    
        const json = await data.json();
      
        setVideoInfo((prev) => [...prev, ...json.items]);
        setPageToken(json.nextPageToken);
        const items = [...existingItems, ...json.items]
        dispatch(setSuggestions({ id: categoryId, items: items }));
      } catch (err) {
        navigate("/error", {
          state: { errStatus: err.message, errMessage: "Failed To Fetch" },
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setVideoInfo([]);
    fetchData();
  },[categoryId]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && pageToken && !loading){
        fetchData(pageToken)
      }
    }, { threshold: 1})

    if(loader.current){
      observer.observe(loader.current)
    }

    return () =>{
      if(loader.current) observer.unobserve(loader.current)
    }

  },[pageToken, loading])


  

  return (
    <div className="flex flex-col">
    <div className={`grid w-96 sm:w-full ${showSidebar ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-4"} space-y-8`}>
      {videoInfo?.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <VideoCard v={v}/>
        </Link>
      ))}
    </div>
    {loading && (<VideoCardShimmer />) }
    <div ref={loader} />
    </div>
  );
};

export default VideoContainer;
