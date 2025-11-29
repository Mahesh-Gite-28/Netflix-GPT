const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute 
        bottom-[14%] sm:bottom-[18%] md:bottom-[22%] lg:bottom-[26%]
        left-0 
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
        z-20 
        max-w-[92%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%]
      "
    >
      {/* TITLE */}
      <h1
        className="
          text-white font-extrabold 
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
          leading-tight drop-shadow-xl
          mb-3 sm:mb-5
        "
      >
        {title}
      </h1>

      {/* OVERVIEW */}
      <p
        className="
          hidden sm:block
          text-white/90
          text-sm sm:text-base md:text-lg
          leading-relaxed
          drop-shadow-xl mb-4 sm:mb-6
          line-clamp-3 md:line-clamp-4
        "
      >
        {overview}
      </p>

      {/* BUTTONS */}
      <div className="flex items-center gap-3 sm:gap-4 mt-3">
        {/* PLAY */}
        <button
          className="
            bg-white text-black font-semibold
            flex items-center gap-2
            px-4 sm:px-6 md:px-8 
            py-2 sm:py-2.5 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-md shadow-lg
            hover:bg-white/90 active:scale-95 
            transition-all
          "
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* MORE INFO */}
        <button
          className="
            bg-white/20 text-white font-semibold 
            flex items-center gap-2
            px-4 sm:px-6 md:px-8 
            py-2 sm:py-2.5 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-md shadow-lg
            backdrop-blur-sm border border-white/20
            hover:bg-white/30 active:scale-95 
            transition-all
          "
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
