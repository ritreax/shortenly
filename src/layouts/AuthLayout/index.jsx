import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return <Outlet />;
}

export { AuthLayout };
