// Header.js
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView, resetGpt } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGPTSearchClick = () => {
    if (showGptSearch) dispatch(resetGpt());
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => {});
  };

  return (
    <header
      className="
      fixed top-0 left-0 right-0 z-50
      bg-gradient-to-b from-black via-black/60 to-transparent
      px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24
      py-3 sm:py-4 flex justify-between items-center
      transition-all
    "
    >
      {/* LOGO */}
      <img
        src={LOGO}
        alt="Netflix"
        className="
        w-20 sm:w-28 md:w-32 lg:w-40 
        cursor-pointer object-contain
      "
      />

      {user && (
        <div
          className="
          flex items-center gap-2 sm:gap-4 md:gap-6
        "
        >
          {/* LANGUAGE SELECT (only when GPT search is open) */}
          {showGptSearch && (
            <select
              className="
              bg-black/60 text-white 
              border border-white/30 rounded-md 
              px-2 sm:px-3 py-1.5 text-xs sm:text-sm 
              focus:outline-none cursor-pointer
              hover:bg-black/80 transition
              backdrop-blur-md
            "
              value={langKey}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            className="
              inline-flex items-center
              px-3 sm:px-4 py-1.5 sm:py-2 
              rounded-md
              bg-white/10 hover:bg-white/20 
              text-white text-xs sm:text-sm font-medium
              transition-all backdrop-blur-md
            "
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home" : "GPT"}
          </button>

          {/* USER AVATAR */}
          <img
            src={user.photoURL}
            alt="User"
            className="
            w-8 h-8 sm:w-10 sm:h-10 
            rounded-md object-cover
            border border-transparent hover:border-white
            transition-all cursor-pointer
          "
          />

          {/* Desktop Sign Out */}
          <button
            onClick={handleSignOut}
            className="
            hidden sm:inline-flex 
            px-4 py-2 rounded-md
            bg-white/10 hover:bg-white/20 
            text-white text-sm font-medium
            transition-all backdrop-blur-md
          "
          >
            Sign Out
          </button>

          {/* Mobile Sign Out */}
          <button
            onClick={handleSignOut}
            className="
            sm:hidden px-3 py-1.5 rounded-md
            bg-white/10 text-white text-xs
          "
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
