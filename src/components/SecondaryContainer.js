// SecondaryContainer.js
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <section
      className="
        relative z-30 w-full
        bg-[#141414]
        -mt-12 sm:-mt-20 md:-mt-28 lg:-mt-36 xl:-mt-44
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20
        py-12 sm:py-16 md:py-20 lg:py-24
        space-y-8 sm:space-y-12 md:space-y-14 lg:space-y-16
      "
    >
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Popular" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming" movies={upcomingMovies} />
    </section>
  );
};

export default SecondaryContainer;
