import React, {useContext} from 'react'
import MenuContext from "../utils/MenuContext";


const VideoCardShimmer = () => {

   const { theme, showSidebar } = useContext(MenuContext);

  return (
    <div className={`w-full grid gap-8 ${showSidebar ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-4"}`}>
        {Array.from({ length: 15}).map((_, index) => (
            <div key={index} className="h-56 w-72 mx-2 shadow-sm shadow-slate-300 rounded-sm bg-slate-300 animate-pulse" >
            </div>
        ))}
    </div>
  )
}

export default VideoCardShimmer