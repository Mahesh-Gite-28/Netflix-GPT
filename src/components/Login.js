import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
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

    if (message) return;

    if (!isSignInForm) {
      // SIGN UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
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
            })
            .catch((error) => {});
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // SIGN IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
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

      
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND}
          alt="background"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

     
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[450px] bg-black/75 backdrop-blur-sm rounded-md px-16 py-14 space-y-6"
        >
          <h1 className="text-white font-bold text-3xl mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="space-y-4">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 bg-[#333333] text-white placeholder-gray-400 
                           rounded-md border border-gray-600 outline-none 
                           focus:bg-[#454545] focus:border-white transition-all duration-200"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full px-5 py-4 bg-[#333333] text-white placeholder-gray-400 
                         rounded-md border border-gray-600 outline-none 
                         focus:bg-[#454545] focus:border-white transition-all duration-200"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-5 py-4 bg-[#333333] text-white placeholder-gray-400 
                         rounded-md border border-gray-600 outline-none 
                         focus:bg-[#454545] focus:border-white transition-all duration-200"
            />
          </div>

          {errorMessage && (
            <div className="bg-orange-500/10 border border-orange-500 rounded-md px-4 py-3">
              <p className="text-orange-400 text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <button
            className="w-full py-4 bg-[#E50914] text-white font-semibold rounded-md 
                       hover:bg-[#C11119] transition-colors duration-200 mt-6"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center justify-between text-sm pt-2">
            <label className="flex items-center text-gray-400 cursor-pointer">
              <input type="checkbox" className="mr-2 w-4 h-4" />
              Remember me
            </label>
            <a href="#" className="text-gray-400 hover:text-gray-300 hover:underline">
              Need help?
            </a>
          </div>

          <div className="pt-8">
            <p className="text-gray-400 text-base">
              {isSignInForm ? "New to Netflix? " : "Already registered? "}
              <span
                onClick={toggleSignInForm}
                className="text-white font-medium hover:underline cursor-pointer"
              >
                {isSignInForm ? "Sign up now" : "Sign in now"}
              </span>
            </p>
          </div>

          <p className="text-gray-500 text-xs pt-4 leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;