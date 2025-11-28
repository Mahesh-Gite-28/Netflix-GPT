// VideoTitle.js
const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute 
        bottom-[18%] sm:bottom-[22%] md:bottom-[27%] lg:bottom-[30%]
        left-0 
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
        z-20 
        max-w-[90%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[50%]
      "
    >
      {/* Title */}
      <h1
        className="
          text-white font-extrabold 
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          leading-tight drop-shadow-xl
          mb-3 sm:mb-5
        "
      >
        {title}
      </h1>

      {/* Overview */}
      <p
        className="
          hidden sm:block
          text-white/90
          text-sm sm:text-base md:text-lg
          leading-relaxed
          drop-shadow-lg mb-4 sm:mb-6
          line-clamp-3 md:line-clamp-4
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 sm:gap-4 mt-2">
        {/* Play Button */}
        <button
          className="
            bg-white text-black font-semibold
            flex items-center gap-2
            px-4 sm:px-6 md:px-8 lg:px-10
            py-2 sm:py-2.5 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-md shadow-md
            hover:bg-white/90 active:scale-95 
            transition-all
          "
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button
          className="
            bg-gray-600/70 text-white font-semibold 
            flex items-center gap-2
            px-4 sm:px-6 md:px-8 lg:px-10
            py-2 sm:py-2.5 md:py-3
            text-sm sm:text-base md:text-lg
            rounded-md shadow-md
            backdrop-blur-sm
            hover:bg-gray-600/50 active:scale-95 
            transition-all
          "
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
