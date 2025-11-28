// Browse.js
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-[#141414] min-h-screen w-full overflow-x-hidden">
      <Header />

      {/* Main hero section */}
      <div className="pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[90px]">
        <MainContainer />
      </div>

      {/* Movie rows */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
