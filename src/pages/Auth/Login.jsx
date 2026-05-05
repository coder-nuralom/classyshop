import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("User Data:", userData);
  };
  return (
    <div className="flex items-center justify-center py-15 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Log in to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="w-full border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm mb-1">Password</label>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-[var(--bg-orange)]/90 hover:text-[var(--bg-orange)]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-1">
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  value={userData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full border border-black/15 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500"
                />
                {userData.password && (
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"
                  >
                    {show ? <IoEyeOutline size={22} /> : <IoEyeOffOutline size={22} />}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[var(--bg-orange)]/95 text-white py-2 rounded-md hover:bg-[var(--bg-orange)]/100 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="font-semibold text-[var(--bg-orange)]/90 hover:text-[var(--bg-orange)]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
