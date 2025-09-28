import React, {useContext} from 'react'
import MenuContext from "../utils/MenuContext";


const VideoCardShimmer = () => {

   const { theme, showSidebar } = useContext(MenuContext);

  return (
    <div className={`w-12/12 grid ${showSidebar ? "grid-cols-3" : "grid-cols-4"} space-y-8`}>
        {Array.from({ length: 15}).map((_, index) => (
            <div key={index} className="h-56 w-72 mx-2 shadow-xs shadow-slate-300 rounded-sm bg-slate-100" >
            </div>
        ))}
    </div>
  )
}

export default VideoCardShimmer