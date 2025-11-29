import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { toggleShowGPTSearch } from "../utils/gptSlice";

const Head = () => {
  const navigate = useNavigate();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => { });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleShowGPTSearch());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black via-black/95 to-transparent pb-4 sm:pb-6 md:pb-8">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 sm:gap-4 px-3 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 lg:py-6">
        <img
          className="w-20 sm:w-24 md:w-32 lg:w-36 xl:w-44 cursor-pointer"
          src={LOGO}
          alt="Netflix"
        />

        {user && (
          <div className="flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-3 lg:gap-5 w-full md:w-auto">
            <div className={`flex w-full items-center ${showGptSearch ? "justify-between" : "justify-end"} gap-3 sm:gap-4 md:gap-5`}>
              {showGptSearch && (
                <select
                  className="w-28 xs:w-32 sm:w-auto bg-gray-800/90 backdrop-blur-sm text-white 
                             px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 
                             rounded-md sm:rounded-lg 
                             text-xs sm:text-sm md:text-base
                             font-medium sm:font-semibold
                             border border-white/20 cursor-pointer
                             hover:bg-gray-700/90 hover:border-white/40
                             focus:outline-none focus:ring-1 focus:ring-white/50
                             transition-all duration-300
                             hover:scale-105 shadow-lg hover:shadow-white/20"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANGUAGES.map(lang => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}

              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <button
                  className="flex-shrink-0 text-white font-medium sm:font-semibold 
                             bg-purple-700 hover:bg-purple-600 
                             rounded-md sm:rounded-lg 
                             px-3 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2
                             text-xs sm:text-sm md:text-base
                             transition-all duration-300 
                             hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "Home" : "GPT Search"}
                </button>

                <img
                  onClick={handleSignOut}
                  className="hidden md:block w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 
                             rounded object-cover 
                             border-2 border-transparent hover:border-red-500 
                             cursor-pointer transition-all duration-300 
                             hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                  alt="user"
                  src={USER_AVATAR}
                />

                <button
                  onClick={handleSignOut}
                  className="flex items-center justify-center gap-2 
                             text-white text-xs sm:text-sm font-medium 
                             px-3 py-1.5 sm:px-4 sm:py-2 rounded 
                             bg-white/10 lg:bg-transparent lg:hover:bg-white/10 
                             hover:bg-white/20 transition-all duration-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;