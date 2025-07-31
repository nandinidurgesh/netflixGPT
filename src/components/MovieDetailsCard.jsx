import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieDetailsCard = ({ movie }) => {
  const { backdrop_path, original_title, release_date, vote_average } = movie;
  return (
    <div className="w-72 h-80 bg-gray-900 rounded-lg shadow-xl transform transition duration-300">
      <img
        src={IMG_CDN_URL + backdrop_path}
        alt={original_title}
        className="w-full h-44 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-white font-bold text-lg truncate">
          {original_title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          {release_date?.split("-")[0]} • ⭐ {vote_average.toFixed(1)}
        </p>
        <button className="mt-3 w-8 h-8 text-white rounded-full border border-white ">
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
