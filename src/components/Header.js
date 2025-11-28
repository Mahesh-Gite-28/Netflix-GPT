// Header.js
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO} from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
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

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => {});
  };

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50
      bg-gradient-to-b from-black/70 via-black/40 to-transparent
      px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5
      flex justify-between items-center
    ">
      {/* Logo */}
      <img
        src={LOGO}
        alt="Netflix"
        className="w-24 sm:w-32 md:w-40 lg:w-44 cursor-pointer"
      />

      {user && (
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Avatar */}
          <img
            src={user.photoURL}//change
            alt="User"
            className="
              w-8 h-8 sm:w-10 sm:h-10 rounded-md
              border border-transparent hover:border-white
              transition-all cursor-pointer
            "
          />

          {/* Desktop sign out */}
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

          {/* Mobile sign out */}
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
