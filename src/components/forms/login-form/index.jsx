import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input, Button } from "@Components";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Login olduktan sonra yönlendirme yapacağız.

  // Sabit olarak kabul ettiğimiz giriş bilgileri (Mock data)
  const correctEmail = "test@example.com";
  const correctPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("loggedIn", "true"); // Kullanıcıyı giriş yapmış olarak işaretle
      navigate("/dashboard"); // Login olduktan sonra anasayfaya yönlendir
    } else {
      alert("Email veya şifre hatalı!");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="relative z-50 p-8 rounded-xl flex flex-col gap-4 ring-1 ring-white/30 w-[85%] sm:w-[450px]"
    >
      <div className="absolute inset-0 bg-white/10 bg-gradient-to-tr from-green-900/40 from-0%  backdrop-blur-xs rounded-xl z-0"></div>

      <Input
        variant="icon_input"
        icon={<IoMail />}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col gap-1.5 relative">
        <Input
          variant="icon_input"
          icon={<FaKey />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a
          href="#"
          className="font-medium text-sm underline text-white self-end opacity-50 transition-all hover:opacity-100"
        >
          Forgot password?
        </a>
      </div>
      <Button type="submit" width="full" variant="white_btn">
        Sign In
      </Button>

      <Link
        to="/"
        className="relative z-50 text-white/75 font-medium text-sm transition-all hover:text-white self-center "
      >
        Go back to Home
      </Link>
    </form>
  );
}

export { LoginForm };
