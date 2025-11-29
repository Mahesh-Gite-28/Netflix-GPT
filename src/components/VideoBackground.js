import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        className="absolute top-1/2 left-1/2 w-[130%] sm:w-[120%] h-[130%] -translate-x-1/2 -translate-y-[50%]"
        style={{
          pointerEvents: "none",
        }}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoBackground;