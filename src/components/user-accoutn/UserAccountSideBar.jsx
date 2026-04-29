import React, { useState } from "react";
import profile from "../../assets/profile.avif";
import { NavLink } from "react-router-dom";
import userMenuItems from "../../../Data/userMenuData";
import { IoMdCloudUpload } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setShowLogoutModal } from "../../../features/logoutModalSlice";

const UserAccountSideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="hidden lg:block">
      <div className="card bg-white flex flex-col items-center py-10 rounded-t-md">
        <div className="w-25 h-25 rounded-full overflow-hidden object-cover relative group hidden lg:block">
          <img src={profile} alt="" className="w-full h-full object-cover" />

          <div className="overlay opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 absolute inset-0 w-full h-full flex items-center justify-center">
            <IoMdCloudUpload className="text-4xl text-white" />
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="text-center mt-2.5">
          <h2 className="text-lg font-medium capitalize">Samantha Joe</h2>
          <p className="text-[15px] font-medium text-[var(--text-gray)]">
            samantha32@gmail.com
          </p>
        </div>
      </div>
      <div className="bg-gray-200 py-3 pt-0 rounded-b-md">
        {userMenuItems.map((item, index) => {
          const Icon = item.icon;
          if (item.action === "logout") {
            return (
              <button
                key={index}
                onClick={() => dispatch(setShowLogoutModal(true))}
                className="flex items-center gap-2.5 px-4 py-2.5 text-base font-medium hover:bg-gray-300 w-full text-left"
              >
                <Icon className="text-xl text-[var(--bg-orange)]" />
                {item.name}
              </button>
            );
          }
          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/my-account"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-4 py-2.5 text-base font-medium hover:bg-gray-300 ${isActive ? "bg-[var(--bg-orange)]/10 border-r-5 border-[var(--bg-orange)]" : ""}`
              }
            >
              <Icon className="text-xl text-[var(--bg-orange)]" />
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default UserAccountSideBar;
