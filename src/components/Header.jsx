import React, { useState, useEffect, useRef } from "react";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div
      className={
        selectedUser
          ? `sticky flex justify-between items-center p-8 top-0 w-screen h-16 z-50 transition-colors duration-300 ${
              isScrolled
                ? "bg-black"
                : "bg-gradient-to-b from-grey-400 to-gray-100"
            }`
          : "w-screen h-16"
      }
    >
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {selectedUser ? (
        <div ref={menuRef}>
          <img
            className="w-10 h-10 rounded-md cursor-pointer"
            alt="user Icon"
            onClick={() => setShowUserMenu(!showUserMenu)}
            src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          ></img>
        </div>
      ) : null}
      {showUserMenu && <UserMenu />}
    </div>
  );
};

export default Header;
