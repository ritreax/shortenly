import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo.svg";
import { Button } from "@Components";

function Header() {
  return (
    <header className="flex justify-between items-center py-6 w-[1440px]">
      <img src={Logo} alt="Logo" className="w-[130px] h-[30px]" />

      <div className="flex gap-2">
        <Link to="/dashboard">
          <Button variant="transparent">Sign in</Button>
        </Link>
        <Button>Sign up</Button>
      </div>
    </header>
  );
}

export { Header };
