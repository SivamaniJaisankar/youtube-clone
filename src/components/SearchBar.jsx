import { CiSearch } from "react-icons/ci";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuContext from "../utils/MenuContext";
import { useFetchSearchSuggestions } from "../utils/useFetchSearchSuggestions";

const SearchBar = () => {
  const { theme } = useContext(MenuContext);
  const [searchText, setSearchText] = useState("");
  const [debouncedText, setDebouncedText] = useState("")
  const [showSearch, setShowSearch] = useState(false);

  const { searchInfo, loading, error } = useFetchSearchSuggestions(debouncedText);

  const handleSearchInput = (input) => {
    const value = typeof input === "string" ? input : input.target.value;
    setSearchText(value); 
    setShowSearch(value.trim()!==''); 
  };

useEffect(()=>{
  const handler = setTimeout(()=>setDebouncedText(searchText), 300);

 return () =>{
  clearTimeout(handler)
 }
},[searchText])
 
const themeClass = theme === "light" ? "bg-white text-slate-800" : "bg-slate-800 text-white";
  
    
  return (
    <div className="relative w-full">
      <div className="w-12/12 sm:w-11/12 flex mx-auto">
        <input
          className={`w-7/12 px-2 py-0 sm:py-1 outline-0 rounded-l-xl border border-slate-200 ${themeClass} text-xs sm:text-sm font-roboto`}
          placeholder="Search"
          value={searchText}
          onChange={handleSearchInput}
          onFocus={() => setShowSearch(true)}
          onBlur={() => setTimeout(()=> setShowSearch(false), 150)}
          aria-label="Search"
        />
        <div className={`w-1/12 p-1 sm:py-2 flex items-center outline-0 rounded-r-xl ${themeClass} border border-slate-200 cursor-pointer hover:text-slate-900 hover:border-slate-500`}>
          <CiSearch
            className={`w-12/12`}
            onClick={() => handleSearchInput(searchText)}
          />
        </div>
      </div>
      {showSearch && searchText !== "" && (
        <div className={`mt-0 pl-5 max-h-80 text-xs sm:text-sm absolute left-0 top-full w-full border border-slate-400 z-10 rounded-md overflow-y-scroll hide-scrollbar ${themeClass}`}>
          {loading && <p className="p-2 text-sm text-center">Loading...</p>}
          {error && <p className="p-2 text-sm text-red-500 text-center">{error}</p>}
          {!loading && !error && searchInfo.length === 0 && (
                  <p className="p-2 text-sm text-center">No results found</p>
          )}
          
          {searchInfo?.map((s, index) => (
            <Link to={`/watch/${s?.id}`} key={s?.id || index} className="flex items-center">
              <CiSearch />
              <p
                className="w-full my-1 px-1 py-1 cursor-pointer hover:bg-amber-200 hover:rounded-sm font-roboto"
              >
                {s?.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
