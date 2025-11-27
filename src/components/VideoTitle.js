import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16 
                    pt-32 md:pt-0 z-20 max-w-[90%] md:max-w-2xl">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white 
                     drop-shadow-2xl leading-tight mb-4 md:mb-6
                     animate-fade-in">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-sm md:text-lg lg:text-xl text-white/90 
                    leading-relaxed drop-shadow-lg line-clamp-3 md:line-clamp-4 
                    max-w-xl mb-6 md:mb-8 font-normal">
        {overview}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 md:gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 md:gap-3 bg-white text-black 
                           font-bold text-sm md:text-lg px-6 md:px-10 py-2 md:py-3.5 
                           rounded hover:bg-white/80 transition-all duration-200 
                           shadow-lg hover:scale-105 active:scale-95">
          <svg className="w-5 h-5 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Play</span>
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 md:gap-3 bg-gray-500/70 text-white 
                           font-bold text-sm md:text-lg px-6 md:px-10 py-2 md:py-3.5 
                           rounded hover:bg-gray-500/50 transition-all duration-200 
                           backdrop-blur-sm shadow-lg hover:scale-105 active:scale-95">
          <svg className="w-5 h-5 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;