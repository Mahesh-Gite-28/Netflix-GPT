import Head from './Head'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useAiringTodayTVShows from '../hooks/useAiringTodayTVShows';
import useOnTheAirTVShows from '../hooks/useOnTheAirTVShows';
import usePopularTVShows from '../hooks/usePopularTVShows';
import useTopRatedTVShows from '../hooks/useTopRatedTVShows';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import ShimmerBrowse from './ShimmerBrowse';

const Browse = () => {

  const movies = useSelector(store => store.movies);

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useAiringTodayTVShows();
  useOnTheAirTVShows();
  usePopularTVShows();
  useTopRatedTVShows();

  if (!movies.nowPlayingMovies && !movies.trailerVideo) return <ShimmerBrowse/>

  return (
    <div className="bg-black min-h-screen">
      <Head />
      {
        showGptSearch ? <GptSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
      
    </div>
  )

}

export default Browse