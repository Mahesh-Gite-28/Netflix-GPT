import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Video Iframe */}
      <div className="relative w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&disablekb=1&fs=0&iv_load_policy=3`}
          title="Background Trailer"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 
                      bg-gradient-to-t from-[#141414] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground;