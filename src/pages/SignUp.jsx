import React, { useState } from "react";
import { Link } from "react-router";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email: form.email, password: form.password };
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('/src/assets/image1.png')] md:bg-[url('/src/assets/image.png')] bg-cover bg-center px-4">
        <form
          className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm h-[470px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder=" Write your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={form.password}
                name="password"
                placeholder=" Write your password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                //   onChange={onChangeHandler}
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-black focus:outline-none"
              />

              {/* ICON TOGGLE */}
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // Eye Slash
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.5 12c1.456 4.104 5.367 7 10.5 7 1.94 0 3.776-.47 5.385-1.302M6.228 6.228A10.45 10.45 0 0112 5c5.133 0 9.044 2.896 10.5 7a10.523 10.523 0 01-4.47 5.227M6.228 6.228L3 3m3.228 3.228l12.544 12.544m0 0L21 21"
                    />
                  </svg>
                ) : (
                  // Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.009 9.963 7.183.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.575-3.009-9.963-7.183z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button className="w-full bg-[#1d4ed8] text-white py-2 rounded-md hover:bg-blue-800 transition">
            Join for free
          </button>

          <div className="flex justify-center mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="hover:text-blue-800">
                Log in
              </Link>
            </p>
          </div>

          <div className="flex items-center w-full my-3">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-400">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="absolute z-30 flex items-center left-1/2 -translate-x-1/2 gap-8">
            <a href="https://google.com/" target="_blank">
              <button
                type="button"
                className="w-14 h-14 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition"
              >
                <img src={google} alt="google" className="w-6 h-6" />
              </button>
            </a>

            <a href="https://www.facebook.com/" target="_blank">
              <button
                type="button"
                className="w-14 h-14 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition"
              >
                <img src={facebook} alt="facebook" className="w-6 h-6" />
              </button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
