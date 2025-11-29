import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieResults, removeMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const identifier = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGPTSearchClick = async () => {
        dispatch(removeMovieResults());
        const query = searchText.current.value;

        const response = await gemini.models.generateContent({
            model: "gemini-2.5-flash",
            contents:
                "User search query: \"" + query + "\".\n" +
                "Return EXACTLY 5 names from ANY valid entertainment category:\n" +
                "- Movies\n" +
                "- TV Shows\n" +
                "- Web Series\n" +
                "- Anime\n" +
                "- Cartoons\n" +
                "- Documentaries\n" +
                "- Specials (standup, WWE, etc.)\n\n" +
                "Rules:\n" +
                "1. If the query is a genre/category (romantic, comedy, hindi, thriller, anime, etc), return the top 5 popular titles from ANY category.\n\n" +
                "2. If the query is a specific title (movie, tv show, anime, documentary, etc), return:\n" +
                "   - That exact title as the FIRST result.\n" +
                "   - Then return 4 similar or related titles from ANY category.\n\n" +
                "3. Only output 5 names, comma separated.\n" +
                "4. No extra text, no explanation, no numbering.\n" +
                "5. Only return title names, nothing else."
        });

        const gptMovies = response.text.split(", ").map(name => name.trim());
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addMovieResults({
            movieNames: gptMovies,
            movieResults: tmdbResults
        }));
    };

    return (
        <form
            className="w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-2xl lg:max-w-3xl 
                       mx-auto px-3 sm:px-4 md:px-6 lg:px-0 mt-3"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="flex flex-row flex-wrap gap-2 md:gap-3 mt-2">
                <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[identifier].gptSearchPlaceholder}
                    className="flex-1 min-w-[65%]
                               bg-gray-900/90 backdrop-blur-sm text-white 
                               px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 
                               text-xs xs:text-sm sm:text-base placeholder:text-[0.65rem] xs:placeholder:text-xs sm:placeholder:text-sm
                               rounded-md sm:rounded-lg 
                               font-medium 
                               placeholder-gray-400
                               border border-gray-700
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                               transition-all duration-300 shadow-md"
                />

                <button
                    className="flex-shrink-0 bg-red-600 hover:bg-red-700
                               text-white font-semibold 
                               px-5 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 
                               text-sm sm:text-base
                               rounded-md sm:rounded-lg 
                               whitespace-nowrap
                               transition-all duration-300 
                               hover:scale-105 shadow-md hover:shadow-lg
                               active:scale-95"
                    onClick={handleGPTSearchClick}
                >
                    {lang[identifier].search}
                </button>
            </div>
        </form>
    );
};

export default GptSearchBar;