import React from "react";
import { useSelector } from "react-redux";
import VideoDescription from "./VideoDescription";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movie?.nowPlayingmovies);
  if (!movies) return;
  const backgroundVideo = movies?.[0];
  const { original_title, overview, id } = backgroundVideo;
  return (
    <div>
      <VideoDescription title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
