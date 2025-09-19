import React, { useContext, useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOSLIST_API } from "../utils/constants";
import { formatDistanceToNow } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { formatNumber } from "../utils/helper";
import { TiEyeOutline } from "react-icons/ti";
import { GrChannel } from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestions } from "../utils/slices/videoSuggestionSlice";
import MenuContext from "../utils/MenuContext";

const VideoContainer = ({ categoryId }) => {
  const { theme, showSidebar } = useContext(MenuContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suggestions = useSelector((state) => state?.videoSuggestion);

  const [videoInfo, setVideoInfo] = useState([]);

  const fetchData = async () => {
    let url = "";
    if (categoryId === 0) {
      url = YOUTUBE_VIDEOSLIST_API;
    } else {
      url = YOUTUBE_VIDEOSLIST_API + "&videoCategoryId=" + categoryId;
    }

    if (categoryId in suggestions) {
      setVideoInfo(suggestions[categoryId]);
    } else {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          throw new Error(`${data.status}`);
        }
        const json = await data.json();
        setVideoInfo((prev) => [...prev, ...json.items]);
        dispatch(setSuggestions({ id: categoryId, items: json.items }));
      } catch (err) {
        navigate("/error", {
          state: { errStatus: err.message, errMessage: "Failed To Fetch" },
        });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`grid ${
        showSidebar ? "grid-cols-3" : "grid-cols-4"
      } space-y-8 h-[845px]`}
    >
      {videoInfo?.map((v) => (
        <Link key={v.id} to={`/watch/${v.id}`}>
          <div className="h-72 mx-2 flex flex-col justify-between hover:shadow-xs hover:shadow-slate-600 rounded-sm cursor-pointer overflow-y-scroll hide-scrollbar">
            <img
              className={`h-48 p-2`}
              src={v?.snippet?.thumbnails?.medium?.url}
              alt={v.snippet.title}
            />
            <p className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} my-1 mx-1 font-bold text-xs`}>
              {v.snippet.title}
            </p>
            <span className="m-1 flex items-center">
              <GrChannel className="text-md mx-1" />
              <p className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} text-xs`}>{v.snippet.channelTitle}</p>
            </span>
            <div className="m-1 flex text-xs text-slate-700">
              <span className="mr-4 flex items-center">
                <TiEyeOutline className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} text-xl`} />
                <p className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>{formatNumber(v.statistics.viewCount)}</p>
              </span>
              <span className="flex items-center text-slate-700">
                <BsClockHistory className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} text-xs mr-1`} />
                <p className = {`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}`}>
                  {formatDistanceToNow(new Date(v.snippet.publishedAt), {
                    addSuffix: true,
                  })}
                </p>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
