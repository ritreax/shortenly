import React from "react";
import { Outlet } from "react-router-dom";
import AuthBg from "/auth-background.jpg";

function AuthLayout() {
  return (
    <main
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${AuthBg})` }}
    >
      <Outlet />
      <span className="absolute bg-black opacity-50 top-0 bottom-0 right-0 left-0 z-10" />
      <span className="absolute custom-gradient opacity-100 top-0 bottom-0 right-0 left-0 z-20" />
    </main>
  );
}

export { AuthLayout };
