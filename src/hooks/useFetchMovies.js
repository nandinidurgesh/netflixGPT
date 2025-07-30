import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useFetchMovies = (url) => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
    const movieData = await fetch(
       url,
      API_OPTIONS
    );
    const movieDataJson = await movieData.json();
    dispatch(addNowPlayingMovies(movieDataJson?.results || []));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useFetchMovies;