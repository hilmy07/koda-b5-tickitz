import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function SecondLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SecondLayout;
