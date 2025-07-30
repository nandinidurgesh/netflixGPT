import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../utils/MovieSlice";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector((state) => state.movie?.trailerKey);

  const getMovieVideo = async () => {
    const trailerVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key`,
      API_OPTIONS
    );
    const json = await trailerVideo.json();
    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerKey(trailer.key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
      title="YouTube video player"
    ></iframe>
  );
};

export default VideoBackground;
