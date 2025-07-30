import React, { useState, useEffect, useRef } from "react";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_ICON } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedUser = useSelector((state) => state.user);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={
        selectedUser
          ? `sticky flex justify-between items-center p-8 top-0 w-screen h-16 z-50 transition-colors duration-300 bg-black
            }`
          : "w-screen h-16"
      }
    >
      <img className="w-44" src={LOGO} alt="Netflix Logo" />
      {selectedUser ? (
        <div ref={menuRef}>
          <img
            className="w-10 h-10 rounded-md cursor-pointer"
            alt="user Icon"
            onClick={() => setShowUserMenu(!showUserMenu)}
            src={USER_ICON}
          ></img>
        </div>
      ) : null}
      {showUserMenu && <UserMenu />}
    </div>
  );
};

export default Header;
