import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.svg";
import { Button } from "@Components";

function Header() {
  return (
    <header className="max-w-screen-2xl w-[95%] flex justify-between items-center py-6 ">
      <img src={Logo} alt="Logo" className="w-[130px] h-[30px]" />

      <div className="flex gap-2">
        <Link to="/login">
          <Button variant="transparent">Sign in</Button>
        </Link>
        <Link to="/register">
          <Button>Sign up</Button>
        </Link>
      </div>
    </header>
  );
}

export { Header };
