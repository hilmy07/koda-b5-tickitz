import React, { useState } from "react";
import tickitz from "../assets/tickitz.png";
import { CiMenuFries } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, user, logout } = useAuth();

  const navClass = (to) =>
    `hover:text-blue-600 text-lg cursor-pointer active:scale-95 transition
     ${pathname === to ? "border-b-2 border-blue-600 text-blue-600" : ""}`;

  const handleLogout = () => {
    logout();
    navigate("/app/v1/auth/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link to="/app/v1">
          <img src={tickitz} alt="tickitz" />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex gap-10 text-slate-700">
          <Link to="/app/v1">
            <button className={navClass("/app/v1")}>Home</button>
          </Link>

          <Link to="/app/v1/movie">
            <button className={navClass("/app/v1/movie")}>Movie</button>
          </Link>

          <button className="hover:text-blue-600 text-lg cursor-pointer active:scale-95 transition">
            Buy Ticket
          </button>
        </nav>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {isLoggedIn ? (
            <>
              <span className="text-slate-700 font-medium">{user?.email}</span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-md active:scale-95 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/app/v1/auth/login">
                <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md active:scale-95 transition">
                  Sign In
                </button>
              </Link>

              <Link to="/app/v1/auth/signup">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-md active:scale-95 transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* ================= MOBILE BURGER ================= */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          <CiMenuFries size={24} strokeWidth={2} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col items-stretch gap-4 py-4 text-slate-700">
            <Link
              to="/app/v1"
              onClick={() => setOpen(false)}
              className="text-center"
            >
              <button className={navClass("/app/v1")}>Home</button>
            </Link>

            <Link
              to="/app/v1/movie"
              onClick={() => setOpen(false)}
              className="text-center"
            >
              <button className={navClass("/app/v1/movie")}>Movie</button>
            </Link>

            <button className="hover:text-blue-600 text-lg cursor-pointer active:scale-95 transition text-center">
              Buy Ticket
            </button>

            {/* ===== MOBILE AUTH BUTTONS ===== */}
            <div className="flex flex-col gap-3 w-full px-4 mt-2">
              {isLoggedIn ? (
                <>
                  <p className="text-slate-700 font-medium text-center">
                    {user?.email}
                  </p>

                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full px-5 py-2 bg-red-500 text-white rounded-md active:scale-95 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/app/v1/auth/login" onClick={() => setOpen(false)}>
                    <button className="w-full px-5 py-2 border border-blue-600 text-blue-600 rounded-md active:scale-95 transition">
                      Sign In
                    </button>
                  </Link>

                  <Link to="/app/v1/auth/signup" onClick={() => setOpen(false)}>
                    <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-md active:scale-95 transition">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
