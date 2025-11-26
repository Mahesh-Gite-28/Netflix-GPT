import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Inputs
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );

    setErrorMessage(message);

    if (message) return; // stop if validation failed

    if (!isSignInForm) {
      // SIGN UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          //update
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://online.fliphtml5.com/umxbb/xesz/files/large/8e2963e4c1a7b9603cea6c7fcd95bada.webp?1684900865",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              navigate("/error")
            });
        })
        .catch((error) => {
          console.log(error.code + " - " + error.message);
          setErrorMessage(error.message);
        });
    } else {
      // SIGN IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Signed in:", userCredential.user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error.code + " - " + error.message);
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      {/* Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
        alt="poster"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/75 p-12 w-full max-w-md mx-auto 
        left-0 right-0 top-1/2 -translate-y-1/2 text-white 
        rounded-lg shadow-xl"
      >
        <h1 className="font-bold text-4xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
        />

        <p className="text-red-500 py-2 font-bold text-lg">{errorMessage}</p>

        <button
          className="p-3 bg-red-600 hover:bg-red-700 w-full rounded font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-6 text-gray-300 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
