import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="
      absolute top-0 left-0 z-10
      text-white w-full aspect-video
      bg-gradient-to-r from-black 
      pt-72 sm:pt-56 md:pt-32 lg:pt-4 xl:pt-0 2xl:pt-0
      mt-24 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-24 2xl:mt-4
      flex items-end md:items-center
    ">

      <div className="px-4 md:px-12 lg:px-16 pb-16 md:pb-0 space-y-3 md:space-y-6 max-w-xl lg:max-w-2xl">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-2xl animate-fade-in">
          {title}
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-gray-100 leading-relaxed line-clamp-4 drop-shadow-lg">
          {overview}
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 pt-3 md:pt-4">
          <button className="
          w-full xs:w-auto flex items-center justify-center gap-1 md:gap-3
          bg-white text-black 
          px-3 md:px-10 py-2 md:py-4 rounded-md font-bold text-xs md:text-base
          hover:bg-white/90 transition-all duration-300
          hover:scale-110 shadow-lg hover:shadow-2xl
          active:scale-95
        ">
            <img src="/assets/play_icon.svg" className="w-4 h-4 md:w-7 md:h-7" alt="" />
            Play
          </button>
          <button className="
          w-full xs:w-auto flex items-center justify-center gap-1 md:gap-3
          bg-white/20 backdrop-blur-sm text-white 
          border border-white/40
          px-3 md:px-10 py-2 md:py-4 rounded-md font-bold text-xs md:text-base
          hover:bg-white/30 hover:border-white/60
          transition-all duration-300
          hover:scale-110 shadow-lg hover:shadow-2xl
          active:scale-95
        ">
            <img src="/assets/info_icon.svg" className="w-4 h-4 md:w-7 md:h-7" alt="" />
            More Info
          </button>
        </div>
      </div>

    </div>
  );
};

export default VideoTitle;