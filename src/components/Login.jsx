import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative flex flex-col items-center gap-36 h-full w-full z-10 ">
        <Header />
        <form className="flex flex-col items-start gap-6 text-white w-2/6 min-w-sm bg-black p-16 opacity-80">
          <span className="text-3xl font-bold">Sign In</span>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              id="email"
              placeholder=" "
              className="peer p-3 pt-5 w-full border border-gray-500 bg-opacity-80 rounded placeholder-transparent focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-1 text-sm text-gray-200 transition-all duration-200
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-bas
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Email or phone number
            </label>
          </div>
          <div className="relative w-full max-w-md">
            <input type="password" className="peer p-3 pt-5 w-full border border-gray-500 bg-opacity-80 rounded placeholder-transparent focus:outline-none" id="password" placeholder=" " />
            <label
              htmlFor="password"
              className="absolute left-3 top-1 text-sm text-gray-200 transition-all duration-200
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-200"
            >
                Password  
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
