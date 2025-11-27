import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6 
                      bg-gradient-to-b from-black via-black/70 to-transparent">
        {/* Logo */}
        <img
          className="w-24 md:w-36 lg:w-44 cursor-pointer brightness-100 hover:brightness-110 transition-all"
          src={LOGO}
          alt="Netflix"
        />

        {/* User Section */}
        {user && (
          <div className="flex items-center gap-3 md:gap-5">
            {/* User Avatar with Dropdown */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                className="w-8 h-8 md:w-10 md:h-10 rounded object-cover 
                           border-2 border-transparent group-hover:border-white transition-all"
                alt="user"
                src={USER_AVATAR}
              />
              
              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="hidden md:flex items-center gap-2 text-white text-sm font-medium 
                           px-4 py-2 rounded hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>

            {/* Mobile Sign Out */}
            <button
              onClick={handleSignOut}
              className="md:hidden text-white text-xs font-medium 
                         px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 transition-all"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;