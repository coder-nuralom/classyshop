import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const ChangePassword = () => {
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showNewConfirmPass, setShowNewConfirmPass] = useState(false);
  const [userData, setUserData] = useState({
    currentPass: "",
    newPass: "",
    confirmNewPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="bg-white p-5 rounded-md w-full">
      <h2 className="text-lg font-medium capitalize mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="w-[60%] space-y-4">
          <div className="relative">
            <input
              type={showCurrentPass ? "text" : "password"}
              name="currentPass"
              value={userData.currentPass}
              onChange={handleChange}
              placeholder="Current Password"
              className="border border-black/15 w-full py-2.5 px-3 focus:outline-none rounded-md text-[15px] text-[var(--text-gray)]"
            />
            {userData.currentPass && (
              <button
                onClick={() => setShowCurrentPass((prev) => !prev)}
                type="button"
                className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer mr-2 text-lg text-[var(--text-gray)]"
              >
                {showCurrentPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            )}
          </div>
          <div className="relative">
            <input
              type={showNewPass ? "text" : "password"}
              name="newPass"
              value={userData.newPass}
              onChange={handleChange}
              placeholder="New Password"
              className="border border-black/15 w-full py-2.5 px-3 focus:outline-none rounded-md text-[15px] text-[var(--text-gray)]"
            />
            {userData.newPass && (
              <button
                onClick={() => setShowNewPass((prev) => !prev)}
                type="button"
                className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer mr-2 text-lg text-[var(--text-gray)]"
              >
                {showNewPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            )}
          </div>
          <div className="relative">
            <input
              type={showNewConfirmPass ? "text" : "password"}
              name="confirmNewPass"
              value={userData.confirmNewPass}
              onChange={handleChange}
              placeholder="Confirm New Password"
              className="border border-black/15 w-full py-2.5 px-3 focus:outline-none rounded-md text-[15px] text-[var(--text-gray)]"
            />
            {userData.confirmNewPass && (
              <button
                onClick={() => setShowNewConfirmPass((prev) => !prev)}
                type="button"
                className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer mr-2 text-lg text-[var(--text-gray)]"
              >
                {showNewConfirmPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[var(--bg-orange)] px-8 py-2.5 text-white rounded-sm cursor-pointer text-base font-medium"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
