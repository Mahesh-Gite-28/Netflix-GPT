// MovieList.js
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="w-full">
      {/* Section Title */}
      <h2
        className="
          text-white font-bold
          text-lg sm:text-xl md:text-2xl lg:text-3xl 
          mb-3 sm:mb-4 md:mb-5 px-2 sm:px-0
        "
      >
        {title}
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        <div
          className="
            flex overflow-x-scroll overflow-y-hidden
            gap-3 sm:gap-4 md:gap-5 
            pb-4 sm:pb-5 md:pb-6
            scroll-smooth

            /* Hide Scrollbar */
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
