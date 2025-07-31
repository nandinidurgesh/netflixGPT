import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/Constants";
import {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} from "../utils/MovieSlice";
import useFetchMovies from "../hooks/useFetchMovies";

const SecondaryContainer = () => {
  const { nowPlayingmovies, topRatedMovies, popularMovies, upcomingMovies } =
    useSelector((state) => state.movie);

  const nowPlaying = useFetchMovies(
    `${API_BASE_URL}/now_playing?`,
    addNowPlayingMovies
  );
  const topRated = useFetchMovies(
    `${API_BASE_URL}/top_rated?`,
    addTopRatedMovies
  );
  const popular = useFetchMovies(`${API_BASE_URL}/popular?`, addPopularMovies);
  const upcoming = useFetchMovies(
    `${API_BASE_URL}/upcoming?`,
    addUpcomingMovies
  );

  return (
    <div className="bg-black text-white p-4">
      <MovieList
        title="Now Playing"
        movies={nowPlayingmovies}
        {...nowPlaying}
      />
      <MovieList title="Top Rated" movies={topRatedMovies} {...topRated} />
      <MovieList title="Popular" movies={popularMovies} {...popular} />
      <MovieList title="Upcoming" movies={upcomingMovies} {...upcoming} />
    </div>
  );
};

export default SecondaryContainer;
