import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, loading } = useSelector(store => store.gpt);

  if (loading) return (
    <div className="flex justify-center items-center">
      <img src="./assets/loader.gif" alt="loader" className="w-[50vh] h-[50vh] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
  if(!movieResults) return null;
  return (
    <div className="w-full 
                    max-w-[96vw] sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl 
                    mx-auto 
                    mt-4 sm:mt-5 md:mt-6 
                    px-3 sm:px-4 md:px-6 lg:px-8 
                    h-[calc(100vh-10rem)] sm:h-[calc(100vh-12rem)] md:h-[calc(100vh-14rem)] lg:h-[calc(100vh-16rem)] xl:h-[calc(100vh-18rem)]">
      <div className="bg-black/60 backdrop-blur-xl 
                      rounded-lg sm:rounded-xl 
                      border border-white/20 
                      shadow-2xl
                      p-4 sm:p-6 md:p-8 lg:p-10 
                      space-y-4 sm:space-y-6 md:space-y-8 
                      h-full overflow-y-auto scrollbar-hide">
        {movieNames?.map((name, i) => (
          <MovieList
            key={i}
            title={name}
            movies={movieResults[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;