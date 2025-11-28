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
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const handleGPTSearchClick = () => {
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
      bg-gradient-to-b from-black/80 via-black/40 to-transparent
      px-4 sm:px-8 md:px-12 lg:px-16 py-4
      flex justify-between items-center
    "
    >
      <img
        src={LOGO}
        alt="Netflix"
        className="w-24 sm:w-32 md:w-40 cursor-pointer"
      />

      {user && (
        <div className="flex items-center gap-3 sm:gap-5">

          
          {showGptSearch && <select
            className="
              bg-black/50 text-white border border-white/20 rounded-md 
              px-3 py-2 text-sm focus:outline-none cursor-pointer
              hover:bg-black/70 transition
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
          </select>}

          {/* GPT SEARCH BUTTON */}
          <button
            className="
              hidden sm:inline-flex items-center
              px-4 py-2 rounded-md
              bg-white/10 hover:bg-white/20 
              text-white text-sm font-medium
              transition-all
            "
            onClick={handleGPTSearchClick}
          >
            {showGptSearch?"Homepage":"GPT Search"}
          </button>

          {/* USER AVATAR */}
          <img
            src={user.photoURL}
            alt="User"
            className="
              w-8 h-8 sm:w-10 sm:h-10 rounded-md
              border border-transparent hover:border-white
              transition-all cursor-pointer
            "
          />

          {/* DESKTOP SIGN OUT */}
          <button
            onClick={handleSignOut}
            className="
              hidden sm:inline-flex items-center
              px-4 py-2 rounded-md
              bg-white/10 hover:bg-white/20 
              text-white text-sm font-medium
              transition-all
            "
          >
            Sign Out
          </button>

          {/* MOBILE SIGN OUT */}
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
