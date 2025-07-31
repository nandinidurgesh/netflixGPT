import React from "react";
import VideoDescription from "./VideoDescription";
import VideoBackground from "./VideoBackground";
import useFeaturedMovie from "../hooks/useFeaturedMovie";
import { API_BASE_URL } from "../utils/Constants";
import { BrowseShimmer } from "./Shimmer";

const MainContainer = () => {
  const { featuredMovie, loading } = useFeaturedMovie(
    `${API_BASE_URL}/now_playing`
  );

  if (loading || !featuredMovie) {
    return <BrowseShimmer />;
  }

  const { original_title, overview, id } = featuredMovie;

  return (
    <>
      <VideoDescription title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContainer;
