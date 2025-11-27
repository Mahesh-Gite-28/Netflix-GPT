import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="group">
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>

      <div
        className="
          flex overflow-x-scroll overflow-y-hidden scroll-smooth
          pb-4 sm:pb-6 md:pb-8
          gap-2 sm:gap-3 md:gap-4 lg:gap-5

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
  );
};

export default MovieList;
