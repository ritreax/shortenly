import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Logo from "../../../assets/logo.svg";
import { Button } from "@Components";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Kullanıcının şu an hangi sayfada olduğunu öğreniyoruz.

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Kullanıcı çıkış yaptığında veriyi temizle
    setIsAuthenticated(false); // State'i güncelle
    navigate("/"); // Login sayfasına yönlendir
  };

  return (
    <header
      className={`${
        location.pathname === "/dashboard"
          ? "w-full"
          : "max-w-screen-2xl w-[95%]"
      } flex justify-between items-center py-6`}
    >
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[130px] h-[30px]" />
      </Link>

      {isAuthenticated ? (
        location.pathname === "/" ? (
          // Eğer kullanıcı anasayfadaysa "Go to Dashboard" butonu gözükecek
          <Button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>
        ) : (
          // Eğer başka bir sayfadaysa Profile ve Logout butonları gösterilecek
          <div className="flex gap-2">
            <Link to="/profile">
              <Button variant="transparent">Profile</Button>
            </Link>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )
      ) : (
        // Eğer giriş yapmamışsa Sign in ve Sign up butonları gösterilecek
        <div className="flex gap-2">
          <Link to="/login">
            <Button variant="transparent">Sign in</Button>
          </Link>
          <Link to="/register">
            <Button>Sign up</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export { Header };
