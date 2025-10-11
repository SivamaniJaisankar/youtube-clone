import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSuggestions } from "../utils/slices/searchSlice";



export const useFetchSearchSuggestions = (searchText) => {

  const dispatch = useDispatch();

  const [searchInfo, setSearchInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchSuggestions = useSelector((state) => state.searchSuggestion);

        useEffect(() => {
        if (!searchText.trim()) {
          setSearchInfo([]);
          setError(null);
          return;
        };

        const getSuggestions = async () => {
          setLoading(true);
          setError(null);

        try {
          //  Check cache first
        if (searchText in searchSuggestions) {
          setSearchInfo(searchSuggestions[searchText]);
          setLoading(false);
          return;
        } 
          // Fetch from API
            const res = await fetch(`${YOUTUBE_SUGGESTION_API}${searchText}`);
            if (!res.ok) throw new Error(`${res.status}`);

            const json = await res.json();
            const values = json.items.map((item) => ({id: item.id.videoId, title: item.snippet.title.split(" ").slice(0,5).join(" ")}));
            setSearchInfo(values);
            dispatch(setSearchSuggestions({ key: searchText, value: values }));
          } catch (err) {
            console.error("Search suggestion error:", err);
            setError("Failed to fetch suggestions");
            setSearchInfo([]);
          } finally {
            setLoading(false)
          }
        }
        
      getSuggestions();        
}, [searchText]);

      return { searchInfo, loading, error };
}