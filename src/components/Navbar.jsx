// Navbar.jsx
import React, { useState } from "react";
import tickitz from "../assets/tickitz.png";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <img src={tickitz} alt="tickitz" />

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10 text-sm text-slate-700">
          <Link to="/">
            <button className="hover:text-blue-600">Home</button>
          </Link>
          <button className="hover:text-blue-600">Movie</button>
          <button className="hover:text-blue-600">Buy Ticket</button>
        </nav>

        {/* Tombol kanan desktop */}
        <div className="hidden md:flex gap-3 text-sm">
          <Link to="/Login" target="_blank">
            <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md">
              Sign In
            </button>
          </Link>
          <Link to="/SignUp" target="_blank">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          <CiMenuFries strokeWidth={2} size={24} />
        </button>
      </div>

      {/* Menu mobile (pakai struktur desktop, cuma vertikal) */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col items-center gap-4 py-4 text-sm text-slate-700">
            <Link to="/">
              <button className="hover:text-blue-600">Home</button>
            </Link>
            <button className="hover:text-blue-600">Movie</button>
            <button className="hover:text-blue-600">Buy Ticket</button>

            <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
              <Link to="/Login" target="_blank">
                <button className="w-full px-5 py-2 border border-blue-600 text-blue-600 rounded-md">
                  Sign In
                </button>
              </Link>
              <Link to="/SignUp" target="_blank">
                <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-md">
                  Sign Up
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
