import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
// import google from "../assets/google.png";
// import facebook from "../assets/facebook.png";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, clearError } from "../redux/reducers/auth";
// import tickitz from "../assets/tickitz.png";

function Forgot() {
  const dispatch = useDispatch();
  const { login } = useAuth();
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //   const [showPassword, setShowPassword] = useState(false);
  const { loading, error } = useSelector((state) => state.auth);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = { email: form.email, password: form.password };
  //   console.log(data);
  // };
  // const validUser = {
  //   email: "admin@mail.com",
  //   password: "123456",
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(
      loginThunk({
        email: form.email,
        password: form.password,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        login(res.payload);
        navigate("/"); // redirect
      }
    });
  };

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('/src/assets/image1.png')] md:bg-[url('/src/assets/image.png')] bg-cover bg-center px-4 before:absolute before:inset-0 before:bg-black/50">
        {/* <img src={tickitz} alt="tickitz" /> */}
        <form
          className="relative bg-white shadow-md rounded-xl p-8 w-full max-w-sm h-[250px] z-3"
          onSubmit={handleLogin}
        >
          <h1 className="text-2xl font-bold text-center mb-6">Forgot</h1>
          {error && (
            <div className="absolute top-17 left-0 right-0 mx-auto w-[84%]">
              <div className="bg-red-50 border border-red-300 text-red-600 text-sm px-4 rounded-md text-center shadow">
                {error}
              </div>
            </div>
          )}

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
              placeholder=" Your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
            {/* {error && <div className="text-red-500 text-sm mb-3">{error}</div>} */}
          </div>

          <button
            className={`w-full py-2 rounded-md transition text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1d4ed8] hover:bg-blue-800"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Forgot;
