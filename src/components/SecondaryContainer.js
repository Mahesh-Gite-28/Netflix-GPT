import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className="relative bg-[#141414] -mt-40 px-8 pb-16 space-y-10">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
