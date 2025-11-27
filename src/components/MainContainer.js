import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-screen">
      <VideoBackground movieId={id} />

      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-[#141414]/40 to-transparent"></div>

      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
