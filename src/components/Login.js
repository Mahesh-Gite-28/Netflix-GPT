import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
        alt="poster"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <form
        className="absolute bg-black/75 p-12 w-full max-w-md mx-auto 
        left-0 right-0 top-1/2 -translate-y-1/2 text-white 
        rounded-lg shadow-xl"
      >

        <h1 className="font-bold text-4xl mb-6">{isSignInForm? "Sign In" : "Sign Up"}</h1>

        { !isSignInForm &&
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 mb-4 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
        />}
        

        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 mb-4 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full bg-[#333] rounded outline-none focus:bg-[#454545]"
        />

        <button className="p-3 bg-red-600 hover:bg-red-700 w-full rounded font-semibold">
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>

        <p className="py-6 text-gray-300 cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
