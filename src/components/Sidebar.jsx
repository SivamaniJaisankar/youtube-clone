import { useContext } from "react";
import sidebars from "../utils/sidebarsections"
import MenuContext from "../utils/MenuContext";

const Sidebar = () => {
  
  const {theme, showSidebar} = useContext(MenuContext);

  return (
    <div className={`${theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'} flex flex-col font-sans text-md overflow-y-scroll hide-scrollbar`}>
      {sidebars.map((s, index) => (
        <div key={index} className="p-1 border-b-slate-100 shadow-xs">
          <div className="flex items-center">
            <p className={`p-2 text-sm font-semibold ${theme === 'light' ? 'text-slate-900' : 'text-white'} font-roboto`}>
              {s.sidebarTitle}
            </p>
          </div>
          {s.sidebarSection.map((ss, index) => (
            <div key={index} className="w-12/12 flex items-center cursor-pointer">
              <span className={`${showSidebar ? 'mx-4 text-lg' : 'text-xl mx-auto my-2' }`}><ss.icon /></span>
              {showSidebar && <p className="p-2 text-sm font-roboto">{ss.label}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
