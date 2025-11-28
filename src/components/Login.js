
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

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
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          });
        })
        .catch((err) => setErrorMessage(err.message));
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)//sign in 
        .catch((err) => setErrorMessage(err.message));
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND}
          alt="background"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Netflix Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Top Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* FORM CONTAINER */}
      <div className="flex items-center justify-center w-full h-full px-4 pt-24 sm:pt-32">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            w-full max-w-[360px] sm:max-w-[420px]
            bg-black/70 backdrop-blur-sm
            rounded-md
            px-6 sm:px-10 py-10 sm:py-12
            space-y-6
          "
        >
          <h1 className="text-white font-bold text-3xl sm:text-4xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Inputs */}
          <div className="space-y-4">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="
                  w-full px-4 py-3 
                  bg-[#333] text-white placeholder-gray-400
                  rounded-md outline-none
                  focus:bg-[#454545] focus:ring-2 focus:ring-white/40
                "
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="
                w-full px-4 py-3 
                bg-[#333] text-white placeholder-gray-400
                rounded-md outline-none
                focus:bg-[#454545] focus:ring-2 focus:ring-white/40
              "
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="
                w-full px-4 py-3 
                bg-[#333] text-white placeholder-gray-400
                rounded-md outline-none
                focus:bg-[#454545] focus:ring-2 focus:ring-white/40
              "
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-500/20 border border-red-500 rounded-md px-4 py-3">
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleButtonClick}
            className="
              w-full py-3 bg-[#E50914] text-white font-semibold
              rounded-md hover:bg-[#C11119] transition-all
              mt-4
            "
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Options */}
          <div className="flex items-center justify-between text-gray-300 text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          {/* Switch SignIn <-> SignUp */}
          <p className="text-gray-400 text-base">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              onClick={() => setIsSignInForm(!isSignInForm)}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>

          {/* Recaptcha */}
          <p className="text-gray-500 text-xs leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#" className="text-blue-600 hover:underline"> Learn more.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
