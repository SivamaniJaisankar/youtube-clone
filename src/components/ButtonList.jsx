import { useContext } from "react";
import MenuContext from "../utils/MenuContext";


const ButtonList = ({category, categoryId, setCategoryId}) => {
  
  const { theme } = useContext(MenuContext);

  return (
    <div className="rounded-md flex items-start w-12/12 my-5 p-2 overflow-x-scroll hide-scrollbar">
      <button 
        className=
    {`${0 === categoryId ? 'bg-slate-600 text-white' :'bg-white text-slate-500'}
    
                
      border border-slate-200 hover:border-slate-400 px-3 py-2 font-bold rounded-md outline-0 mx-2 text-xs text-nowrap cursor-pointer`}
        name="all"
        onClick={(e)=>setCategoryId(0)}
      >
        All
      </button>
      {category.map((c) => (
        <button
          key={c.id}
          className=
    {`${c.id === categoryId ? 'bg-slate-600 text-white' :'bg-white text-slate-500'} 
       
        border border-slate-200 hover:border-slate-400 px-3 py-2 font-semibold rounded-md outline-0 mx-2 text-xs text-nowrap cursor-pointer`}
          onClick={()=>setCategoryId(c.id)}
        >
          {c?.snippet?.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
