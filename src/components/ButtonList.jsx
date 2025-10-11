import React from "react";

const ButtonList = ({category, categoryId, setCategoryId}) => {
  
  return (
    <div className="rounded-md flex items-start w-full my-5 p-2 overflow-x-auto hide-scrollbar">
      <button 
        className=
    {`${0 === categoryId ? 'bg-slate-600 text-white' :'bg-white text-slate-500'}
    
                
      border border-slate-200 hover:border-slate-400 px-3 py-2 font-bold rounded-md outline-0 mx-2 text-xs text-nowrap cursor-pointer font-roboto`}
        name="all"
        onClick={(e)=>setCategoryId(0)}
      >
        All
      </button>
      {category?.map((c, index) => (
        <button
          key={c?.id || index}
          className=
    {`${c.id === categoryId ? 'bg-slate-600 text-white' :'bg-white text-slate-500'} 
       
        border border-slate-200 hover:border-slate-400 px-3 py-2 font-semibold rounded-md outline-0 mx-2 text-xs text-nowrap cursor-pointer font-roboto`}
          onClick={()=>setCategoryId(c.id)}
        >
          {c?.snippet?.title}
        </button>
      ))}
    </div>
  );
};

export default React.memo(ButtonList);
