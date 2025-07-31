import MovieCard from "./MovieCard";
import { ShimmerRow } from "./Shimmer";

const MovieList = ({ title, movies, scrollRef, handleScroll, loading }) => {
  if (loading) {
    return <ShimmerRow title={title} />;
  }
  if (!movies || movies.length === 0) {
    return <div className="text-center text-gray-500"></div>;
  }
  return (
    <div className="pl-6 pr-2 mb-52 -mt-48 relative z-40">
      <span className="text-2xl font-bold">{title}</span>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 mt-4 overflow-x-scroll scrollbar-hide scroll-smooth overflow-y-hidden"
      >
        {movies?.map((movie, index) => (
          <MovieCard key={`${title}-${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
