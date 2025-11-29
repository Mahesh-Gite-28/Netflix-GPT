import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className="sm:-mt-12 md:-mt-16 lg:-mt-48 relative z-10 pb-10 sm:pt-10 md:pt-14">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
      <MovieList title="Trending" movies={movies?.trendingMovies} />
      <MovieList title="TV Shows - Airing Today" movies={movies?.airingTodayTVShows} />
      <MovieList title="TV Shows - On The Air" movies={movies?.onTheAirTVShows} />
      <MovieList title="TV Shows - Popular" movies={movies?.popularTVShows} />
      <MovieList title="TV Shows - Top Rated" movies={movies?.topRatedTVShows} />
    </div>
  )
}

export default SecondaryContainer