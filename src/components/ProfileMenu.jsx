import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import userMenuItems from "../../Data/userMenuData";
import profileImg from "../assets/profile_icon.png";
import { setShowLogoutModal } from "../../features/logoutModalSlice";
import { setLogin } from "../../features/authSlice";

const ProfileMenu = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLogin);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef(null);

  // click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowProfileMenu]);

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowProfileMenu((prev) => !prev);
        }}
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
      >
        {isLoggedIn ? (
          <img src={profileImg} alt="" className="w-full h-full object-cover" />
        ) : (
          <AiOutlineUser className="text-[24px] hover:text-[var(--bg-orange)] duration-200" />
        )}
      </div>

      {/* Dropdown */}
      <ul
        className={`absolute top-full mt-2 right-0 w-[200px] z-50 text-right bg-gray-100 py-3 rounded-md shadow-md transition-all duration-200 ${
          showProfileMenu
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        {isLoggedIn ? (
          userMenuItems.map((item, index) => {
            const Icon = item.icon;

            if (item.action === "logout") {
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      dispatch(setShowLogoutModal(true));
                    }}
                    className="flex items-center justify-end gap-2.5 w-full px-3 py-2 hover:bg-gray-200 text-sm font-medium"
                  >
                    {item.name} <Icon className="text-lg" />
                  </button>
                </li>
              );
            }

            return (
              <li key={index} onClick={() => setShowProfileMenu(false)}>
                <Link
                  to={item.path}
                  className="flex items-center justify-end gap-2.5 px-3 py-2 hover:bg-gray-200 text-sm font-medium"
                >
                  {item.name} <Icon className="text-lg" />
                </Link>
              </li>
            );
          })
        ) : (
          <>
            <li onClick={() => setShowProfileMenu(false)}>
              <button
                onClick={() => {
                  navigate("/");
                  dispatch(setLogin());
                }}
                className="w-full flex items-center justify-end gap-2.5 px-3 py-2 hover:bg-gray-200 text-sm font-medium cursor-pointer"
              >
                Login <IoMdLogIn className="text-lg" />
              </button>
            </li>
            <li onClick={() => setShowProfileMenu(false)}>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="w-full flex items-center justify-end gap-2.5 px-3 py-2 hover:bg-gray-200 text-sm font-medium cursor-pointer"
              >
                Register <FaRegRegistered className="text-lg" />
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileMenu;
