import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="Background Trailer"
        allow="autoplay; encrypted-media"
      ></iframe>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414]"></div>
    </div>
  );
};

export default VideoBackground;
