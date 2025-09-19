import { useEffect, useState, useContext } from "react";
import Sidebar from "./Sidebar";
import MenuContext from "../utils/MenuContext";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_VIDEO_CATEGORY_API } from "../utils/constants";


const Body = () => {
  const { theme, showSidebar } = useContext(MenuContext);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEO_CATEGORY_API);
        const json = await data.json();
        setCategory(json.items);
      } catch (err) {
        console.error(err.message);
      }
    };

  return (
    <div className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} w-12/12 flex h-[936px] overflow-y-scroll hide-scrollbar`}>
      <Sidebar className={`${showSidebar ? 'w-2/12' : 'w-[50px]' }`}/>
      <div className={`${showSidebar ? 'w-10/12' : 'w-[1300px]' } mx-auto`}>
        <ButtonList category={category} categoryId={categoryId} setCategoryId={setCategoryId} />
        <VideoContainer categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Body;
