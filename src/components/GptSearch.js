
import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {

  return (
    <div className="fixed inset-0 overflow-x-hidden overflow-y-auto">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BACKGROUND_IMG})`
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative min-h-full 
                      pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 
                      pb-8 sm:pb-10
                     ">
        <GptSearchBar />
       <GptMovieSuggestions />
        
      </div>
    </div>
  );
};

export default GptSearch;
