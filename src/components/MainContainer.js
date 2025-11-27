import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen md:h-screen">
      {/* Video Background */}
      <VideoBackground movieId={id} />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Video Title & Info */}
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;