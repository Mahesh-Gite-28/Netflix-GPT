import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full pointer-events-none">
        <iframe
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[170vw] sm:w-[150vw] md:w-[120vw] lg:w-full
            h-[90vh] sm:h-[100vh] md:h-[115vh] lg:h-[125vh]
            object-cover
          "
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}
            ?autoplay=1&mute=1&controls=0&modestbranding=1
            &playsinline=1&showinfo=0&rel=0&iv_load_policy=3
            &loop=1&playlist=${trailerVideo?.key}&disablekb=1
          `.replace(/\s+/g, "")}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* TOP Fade (hides YouTube icons) */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/95 to-transparent"></div>

      {/* LEFT Side cinematic fade */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

      {/* BOTTOM Fade (makes text readable) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
