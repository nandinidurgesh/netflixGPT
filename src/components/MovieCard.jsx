import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-40 flex-shrink-0 ">
      <img
        src={IMG_CDN_URL + movie?.poster_path}
        alt={movie?.original_title}
        className="rounded-sm transition-transform duration-300 hover:scale-105 ease-out"
      />
    </div>
  );
};

export default MovieCard;
