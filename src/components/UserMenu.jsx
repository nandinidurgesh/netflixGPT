import React, { use } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserMenu = ({ setShowUserMenu }) => {
  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      className="absolute right-4 top-16 bg-black shadow-lg rounded-md p-4 w-56"
      onMouseLeave={() => setShowUserMenu(false)}
    >
      <ul className="space-y-2 text-white">
        <li className="hover:underline opacity-40">Profile</li>
        <li className="hover:underline opacity-40">Account</li>
        <li className="hover:underline opacity-40">Settings</li>
        <li className="hover:underline opacity-40">Help</li>
        <li
          className="hover:underline cursor-pointer flex items-center gap-4"
          onClick={() => {
            handleSignout();
          }}
        >
          <div className="flex items-center space-x-2">
            <img
              src={selector.photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          Sign Out ({selector.displayName})
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
