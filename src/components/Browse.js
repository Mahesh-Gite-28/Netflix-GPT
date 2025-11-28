// Browse.js
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div
      className={`${
        showGptSearch ? "bg-transparent" : "bg-[#141414]"
      } min-h-screen w-full overflow-x-hidden`}
    >
      <Header />

      {showGptSearch ? (
        <div className="fixed inset-0 z-40 overflow-auto">
    <GPTSearch />
  </div>
      ) : (
        <>
          <div className="pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[90px]">
            <MainContainer />
          </div>
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
