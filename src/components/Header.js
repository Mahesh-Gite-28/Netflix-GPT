import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate=useNavigate();

  const user=useSelector((store)=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className="absolute top-0 left-0 w-full px-8 py-4 
                    bg-gradient-to-b from-black/80 to-transparent z-20
                    flex justify-between items-center"
    >
      
      <img
        className="w-40 md:w-48"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      />

      
      {user && <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-md"
          alt="usericon"
          src="https://pbs.twimg.com/media/GvFs5kxWEAAJpzR?format=jpg&name=360x360"
        />
        <img
          className="w-10 h-10 rounded-md"
          alt="usericon"
          src={user.photoURL}/>
        <button
          className="text-white font-semibold hover:underline"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
