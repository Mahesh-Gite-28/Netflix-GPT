import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full">
      <form className="flex flex-col sm:flex-row items-center gap-4 bg-black/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10">
        <input
          type="text"
          placeholder={lang[langkey].placeholder}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          className="px-6 py-3 bg-red-700 hover:bg-red-600 active:scale-95 transition rounded-lg 
                     text-white font-semibold whitespace-nowrap"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
