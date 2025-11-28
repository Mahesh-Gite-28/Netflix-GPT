import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import gemini from "../utils/gemini";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;

    try {
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

      const text = response.candidates[0].content.parts[0].text;
      console.log("GEMINI RESULT:", text);

    } catch (err) {
      console.error("Gemini Error:", err);
    }
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col sm:flex-row items-center gap-4 bg-black/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langkey].placeholder}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="button"
          onClick={handleGPTSearchClick}
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
