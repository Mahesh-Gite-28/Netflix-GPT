// VideoBackground.js
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
            w-[150vw] sm:w-[130vw] md:w-[110vw] lg:w-[100vw]
            h-[85vh] sm:h-[95vh] md:h-[105vh] lg:h-[115vh]
            object-cover
          "
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}
            ?autoplay=1
            &mute=1
            &controls=0
            &modestbranding=1
            &playsinline=1
            &showinfo=0
            &rel=0
            &iv_load_policy=3
            &loop=1
            &playlist=${trailerVideo?.key}
            &disablekb=1
            &enablejsapi=1
            &fs=0
            &border=0
          `.replace(/\s+/g, "")}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Top Gradient to Hide YouTube Title Icons */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/95 to-transparent pointer-events-none"></div>

      {/* Left/Right Cinematic Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground;
