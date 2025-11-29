const ShimmerBrowse = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden">

      <div className="relative w-full aspect-video bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{
            animation: "shimmer 1.5s infinite",
          }}
        ></div>
      </div>

      <div className="absolute top-[18%] sm:top-[25%] left-4 right-4 sm:left-8 sm:right-auto md:left-12 lg:left-16 space-y-5 max-w-full sm:max-w-xl">

        <div className="h-16 w-72 md:w-96 bg-gray-800 overflow-hidden relative rounded">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[90%] md:w-[500px] bg-gray-800 relative overflow-hidden rounded">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[85%] md:w-[450px] bg-gray-800 relative overflow-hidden rounded">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[75%] md:w-[380px] bg-gray-800 relative overflow-hidden rounded">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="flex flex-wrap gap-3 pt-6">
          <div className="h-12 w-32 bg-gray-700 relative overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ animation: "shimmer 1.5s infinite" }}
            ></div>
          </div>

          <div className="h-12 w-40 bg-gray-700 relative overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ animation: "shimmer 1.5s infinite" }}
            ></div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ShimmerBrowse;