import React, { use } from "react";
import { useDispatch } from "react-redux";
import { setShowLogoutModal } from "../../features/logoutModalSlice";
import { setLogout } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setShowLogoutModal(false))}
      className="fixed inset-0 bg-black/55 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full mx-4"
      >
        <h3 className="text-lg font-medium mb-4">Do you want to logout?</h3>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => dispatch(setShowLogoutModal(false))}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
          >
            No
          </button>
          <button
            onClick={() => {
              dispatch(setShowLogoutModal(false));
              dispatch(setLogout());
              navigate("/");
            }}
            className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded cursor-pointer"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
