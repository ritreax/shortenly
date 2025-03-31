import React from "react";
import Logo from "../../../assets/logo.svg";

function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center gap-4 relative">
      <div className="flex flex-col items-center">
        {/* <h3 className="text-2xl text-ash-gray text-center font-medium">
          Effortless shorter URLs
        </h3> */}
        <img src={Logo} alt="" className="opacity-40" />
      </div>
      <p className="text-stone-gray font-medium text-nowrap absolute bottom-1 text-xs md:text-base">
        Copyright &copy; 2025 | All rights and design belong to&nbsp;
        <span className="text-blue">stageup.ai</span>
      </p>
    </footer>
  );
}

export { Footer };
