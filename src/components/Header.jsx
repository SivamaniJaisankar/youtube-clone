import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { YOUTUBE_LOGO } from "../utils/constants";
import { useContext, useState, useEffect } from "react";
import MenuContext from "../utils/MenuContext";
import SearchBar from "./SearchBar";
import { TbMoon } from "react-icons/tb";

const Header = () => {

  const {handleSidebar, theme, handleTheme} = useContext(MenuContext);
  
  return (
    <div className={`w-12/12 h-20 flex justify-between ${theme === 'light' ? 'bg-white' : 'bg-slate-800'}`}>
      <div className="w-3/12 flex items-center">
        <RxHamburgerMenu className={`w-9 p-2 h-9 cursor-pointer ${theme === 'light' ? 'text-slate-500' : 'text-white'}`} onClick={handleSidebar}/>
        <div className="w-24 cursor-pointer">
        <img
          src={YOUTUBE_LOGO}
          alt="YouTube Logo"
        />
        </div>
      </div>
      <div className="w-7/12 flex flex-col items-center justify-center">
        <SearchBar />
      </div> 
      <div className="w-2/12 flex items-center justify-center">
        
        <TbMoon onClick={handleTheme} className={`mx-5 text-3xl rounded-2xl shadow-sm shadow-slate-400 cursor-pointer ${theme === 'light' ? 'text-slate-500' : 'text-white'}`}/> 
        <CgProfile className={`text-3xl rounded-3xl shadow-sm shadow-slate-400 cursor-pointer ${theme === 'light' ? 'text-slate-500' : 'text-white'}`}/>

      </div>
    </div>
  );
};

export default Header;


