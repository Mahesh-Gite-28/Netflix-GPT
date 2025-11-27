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
    signOut(auth).catch(() => {});
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black via-black to-transparent pb-8">
      <div className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6">
        <img
          className="w-24 md:w-36 lg:w-44 cursor-pointer"
          src={LOGO}
          alt="Netflix"
        />

        {user && (
          <div className="flex items-center gap-3 md:gap-5">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                className="w-8 h-8 md:w-10 md:h-10 rounded object-cover 
                           border-2 border-transparent group-hover:border-white transition-all"
                alt="user"
                src={USER_AVATAR}
              />

              <button
                onClick={handleSignOut}
                className="hidden md:flex items-center gap-2 text-white text-sm font-medium 
                           px-4 py-2 rounded hover:bg-white/10 transition-all"
              >
                Sign Out
              </button>
            </div>

            <button
              onClick={handleSignOut}
              className="md:hidden text-white text-xs font-medium 
                         px-3 py-1.5 rounded bg-white/10 hover:bg-white/20"
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
