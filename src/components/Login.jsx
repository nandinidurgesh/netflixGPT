import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const signUpToggale = () => {
    setIsSignUp(!isSignUp);
  };

  const handleButtonClick = () => {
    const validateFormData = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current ? nameRef.current.value : null,
      isSignUp
    );
    if (validateFormData) {
      setErrorMessage(validateFormData);
      return;
    } else {
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative flex flex-col items-center gap-36 h-full w-full z-10 ">
        <Header />
        <form
          className="flex flex-col items-start gap-6 text-white w-2/6 min-w-sm bg-black p-16 opacity-70"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="text-3xl font-bold">
            {isSignUp ? "Sign Up" : "Sign In"}
          </span>
          {isSignUp ? (
            <div className="relative w-full max-w-md">
              <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder=" "
                className="peer p-3 pt-5 w-full border border-gray-500 bg-opacity-80 rounded placeholder-transparent focus:outline-none"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-1 text-sm text-gray-200 transition-all duration-200
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-200"
              >
                Name
              </label>
            </div>
          ) : null}
          <div className="relative w-full max-w-md">
            <input
              ref={emailRef}
              type="text"
              id="email"
              placeholder=" "
              className="peer p-3 pt-5 w-full border border-gray-500 bg-opacity-80 rounded placeholder-transparent focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-sm text-gray-200 transition-all duration-200
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Email or phone number
            </label>
          </div>
          <div className="relative w-full max-w-md">
            <input
              ref={passwordRef}
              type="password"
              className="peer p-3 pt-5 w-full border border-gray-500 bg-opacity-80 rounded placeholder-transparent focus:outline-none"
              id="password"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-1 text-sm text-gray-200 transition-all duration-200
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Password
            </label>
            <span className="text-red-500 text-sm mt-2">{errorMessage}</span>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
            onClick={handleButtonClick}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <span className="text-sm text-gray-400">
            {isSignUp ? "Already have an account?" : "New to Netflix?"}{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={signUpToggale}
            >
              {isSignUp ? "Sign in" : "Sign up"} now.
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
