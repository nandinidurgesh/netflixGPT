import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

const useFetchMovies = (url,action) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const scrollRef = useRef(null);

    const fetchMovies = async (pageNum) => {
    setLoading(true);

    const movieData = await fetch(
      `${url}page=${pageNum}`, API_OPTIONS
    );
    const movieDataJson = await movieData.json();
    
    dispatch(action(movieDataJson?.results || []));
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, [url]);

   const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || loading) return;

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 200) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (page > 1) fetchMovies(page);
  }, [page]);

  return { scrollRef, loading, handleScroll };

};

export default useFetchMovies;