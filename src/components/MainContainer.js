
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[19];
  const { title, overview, id } = mainMovie;

  return (
    <section
      className="
        relative w-full
        h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] xl:h-screen
        overflow-hidden
      "
    >
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Left + Bottom Dark Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>

      {/* Title + Buttons */}
      <VideoTitle title={title} overview={overview} />
    </section>
  );
};

export default MainContainer;
