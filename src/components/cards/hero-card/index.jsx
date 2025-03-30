import React from "react";
import { cards } from "./constants";

function HeroCard({
  bgColor,
  icon,
  iconXL,
  text,
  positionClass,
  className = "",
}) {
  return (
    <div
      className={`${bgColor} ${className} flex-grow min-w-0 
    h-[250px] lg:h-[200px] flex flex-col items-center justify-center 
    gap-4 relative rounded-lg shadow-lg`}
    >
      {/* Küçük ikon */}
      <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
        <img src={icon} alt="" />
      </div>

      {/* Kart metni */}
      <p className="w-[15ch] text-sm text-center font-medium leading-4 relative z-10">
        {text}
      </p>

      {/* XL ikon (Pozisyonu Dinamik) */}
      <img src={iconXL} className={`absolute ${positionClass} z-0`} alt="" />
    </div>
  );
}

export { HeroCard };
