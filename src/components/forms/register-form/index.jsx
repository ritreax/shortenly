import React from "react";

import { Input, Button } from "@Components";

import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="relative z-50 p-8 rounded-xl flex flex-col gap-4 ring-1 ring-white/30 w-[85%] sm:w-[450px]">
      <div className="absolute inset-0 bg-white/10 bg-gradient-to-tr from-green-900/40 from-0%  backdrop-blur-xs rounded-xl z-0"></div>

      <Input
        variant="icon_input"
        icon={<IoMail />}
        type="email"
        placeholder="Email"
      />
      <Input
        variant="icon_input"
        icon={<FaKey />}
        type="password"
        placeholder="Password"
      />
      <Input
        variant="icon_input"
        icon={<FaKey />}
        type="password"
        placeholder="Confirm Password"
      />

      <Button children="Register" width="full" variant="white_btn" />

      <Link
        to="/"
        className="relative z-50 text-white/75 font-medium text-sm transition-all hover:text-white self-center "
      >
        Go back to Home
      </Link>
    </div>
  );
}

export { RegisterForm };
