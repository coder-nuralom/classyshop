import React, { useState } from "react";
import InputField from "../../components/UI/InputField";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import profile from "../../assets/profile.avif";
import { IoMdCloudUpload } from "react-icons/io";

const MyAccount = () => {
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
    <div className="space-y-10">
      <div className="card w-full bg-white flex flex-col items-center py-10 rounded-t-md lg:hidden">
        <div className="w-25 h-25 rounded-full overflow-hidden object-cover relative group">
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

      <div className="bg-white p-5 rounded-md w-full">
        <h2 className="text-xl font-medium capitalize mb-6">My Profile</h2>
        <form className="space-y-5">
          <div className="flex flex-col min-[575px]:flex-row gap-5">
            <InputField placeholder={"First Name"} />
            <InputField placeholder={"Last Name"} />
          </div>
          <div className="flex flex-col min-[575px]:flex-row gap-5">
            <InputField placeholder={"Phone Number"} />
            <InputField placeholder={"Email"} />
          </div>
          <div>
            <button className="bg-[var(--bg-orange)] px-8 py-2.5 text-white rounded-sm cursor-pointer text-base font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-5 rounded-md w-full">
        <h2 className="text-lg font-medium capitalize mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="w-full min-[590px]:w-sm space-y-4">
            <div className="relative">
              <input
                type={showCurrentPass ? "text" : "password"}
                name="currentPass"
                value={userData.currentPass}
                onChange={handleChange}
                placeholder="Current Password"
                autoComplete="on"
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
                autoComplete="on"
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
                autoComplete="on"
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
    </div>
  );
};

export default MyAccount;
