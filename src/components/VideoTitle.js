const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-[30%] left-0 px-12 z-20 max-w-xl">
      <h1 className="text-5xl font-bold text-white mb-4">
        {title}
      </h1>

      <p className="hidden sm:block text-lg text-white/90 mb-6 line-clamp-3">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-8 py-3 font-bold rounded hover:bg-white/90">
          Play
        </button>

        <button className="bg-gray-600/70 text-white px-8 py-3 font-bold rounded hover:bg-gray-600/50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
