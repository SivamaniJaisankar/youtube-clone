import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_CATEGORY_API } from "./constants";


export const useFetchVideoCategory = () => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

useEffect(() => {
    const getCategories = async () => {
      
      
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(YOUTUBE_VIDEO_CATEGORY_API);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setCategory(json.items);
      } catch (err) {
        console.error("Category fetch failed:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false)
      }
    };

    getCategories();

  }, []);

  
  return { category, loading, error };
}