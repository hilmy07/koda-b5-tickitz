import React from "react";
import { Routes, Route, Navigate } from "react-router";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Movie from "./pages/Movie";
import Order from "./pages/Order";
import MainLayout from "./Layouts/MainLayout";
import ProtectedRoute from "./context/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";
import Payment from "./pages/Payment";

function Router() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/app/v1" replace />} />
          <Route path="app/v1">
            <Route path="auth">
              <Route path="SignUp" element={<SignUp />} />
              <Route path="Login" element={<Login />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="movie" element={<Movie />} />
              <Route path="detail/:id/:title" element={<Detail />} />
              <Route element={<ProtectedRoute />}>
                <Route path="order/:id" element={<Order />} />
                <Route path="payment" element={<Payment />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default Router;
