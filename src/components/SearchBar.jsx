import { CiSearch } from "react-icons/ci";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuContext from "../utils/MenuContext";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSuggestions } from "../utils/slices/searchSlice";

const SearchBar = () => {
  const { handleSidebar, theme, handleTheme } = useContext(MenuContext);
  const [searchText, setSearchText] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchSuggestions = useSelector((state) => state.searchSuggestion);


  const handleSearchInput = (input) => {
    const value = typeof input === "string" ? input : input.target.value;

    setSearchText(value);
    if (value.trim() != "") {
      setShowSearch(true);
      getSuggestions();
    } else {
      setShowSearch(false);
    }
  };

  const getSuggestions = async () => {
    if (searchText in searchSuggestions) {
      setSearchInfo(searchSuggestions[searchText]);
    } else {
      try {
        const data = await fetch(`${YOUTUBE_SUGGESTION_API}${searchText}`);
        if (!data.ok) {
          throw new Error(`${data.status}`);
        }
        const json = await data.json();
        const values = json.items.map((item) => ({id: item.id.videoId, title: item.snippet.title.substring(0, 25)}));
        setSearchInfo(values);
        dispatch(setSearchSuggestions({ key: searchText, value: values }));
      } catch (err) {
        console.error(err);
        navigate("/error", {
          state: { errStatus: err, errMessage: "FAILED TO FETCH" },
        });
      }
    }
  };

  useEffect(() => {
    if (!searchText.trim()) return;
    const timer = setTimeout(() => getSuggestions(), 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

 
  return (
    <>
      <div className="w-12/12 flex">
        <input
          className={`w-7/12 px-2 py-1 outline-0 rounded-l-xl border border-slate-200 ${theme === "light" ? "text-slate-600": "bg-slate-800 text-white"} text-xs sm:text-sm font-roboto`}
          placeholder="Search"
          value={searchText}
          onChange={handleSearchInput}
          onFocus={() => setShowSearch(true)}
          onBlur={() => setTimeout(()=> setShowSearch(false), 150)}
        />
        <div className={`w-1/12 py-2 flex items-center outline-0 rounded-r-xl ${theme === "light" ? "bg-slate-100 text-slate-600": "bg-slate-800 text-white"} border border-slate-200 cursor-pointer hover:text-slate-900 hover:border-slate-500`}>
          <CiSearch
            className={`w-12/12`}
            onClick={() => handleSearchInput(searchText)}
          />
        </div>
      </div>
      {showSearch && searchText !== "" && (
        <div className="mt-0 w-5/12 pl-5 max-h-80 text-sm absolute top-16 left-80 border border-slate-400 bg-white z-10 rounded-md overflow-y-scroll hide-scrollbar">
          {searchInfo?.map((s) => (
            <Link to={`/watch/${s?.id}`} key={s?.id} className="flex items-center">
              <CiSearch />
              <p
                className="my-1 px-1 py-1 text-slate-900 cursor-pointer hover:bg-amber-200 hover:rounded-sm font-roboto"
              >
                {s?.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
