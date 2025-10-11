import { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import MenuContext from "../utils/MenuContext";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useFetchVideoCategory } from "../utils/useFetchVideoCategory";


const Body = () => {
  const { theme, showSidebar, isMobile } = useContext(MenuContext);
  const [categoryId, setCategoryId] = useState(0);
  
  const { category, loading, error } = useFetchVideoCategory();

  if (loading) return <p className="text-center p-4">Loading categories...</p>;
  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;
  
  const themeClass = theme === "light" ? "bg-white text-slate-800" : "bg-slate-800 text-white";
  
  return (
    <div className={`flex w-full h-screen overflow-y-scroll hide-scrollbar ${themeClass}`}>
      {!isMobile && <Sidebar className={`${showSidebar ? 'w-2/12' : 'w-[60px]' }`}/> }
      <div className={`${showSidebar ? 'w-10/12' : 'w-[1300px]' } mx-auto`}>
        <ButtonList category={category} categoryId={categoryId} setCategoryId={setCategoryId} />
        <VideoContainer categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Body;
