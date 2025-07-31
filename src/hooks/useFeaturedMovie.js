import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useFeaturedMovie = (apiUrl) => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFeaturedMovie = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl, API_OPTIONS);
      const data = await response.json();
      
      if (data?.results?.length > 0) {
        setFeaturedMovie(data.results[0]);
      }
    } catch (error) {
      console.error("Error fetching featured movie:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedMovie();
  }, [apiUrl]);

  return { featuredMovie, loading }
};


export default useFeaturedMovie;