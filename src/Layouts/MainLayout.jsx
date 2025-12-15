import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
