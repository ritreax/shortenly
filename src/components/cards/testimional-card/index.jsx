import React from "react";
import { AvatarBgShape } from "@Components/icons";
import { TESTIMIONAL_CARD_DATA } from "./constants";

function TestimionalCard() {
  return (
    <div className="max-w-screen-2xl w-[95%] grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
      {TESTIMIONAL_CARD_DATA.map((card) => (
        <div
          key={card.id}
          className="px-6 py-8 bg-white rounded-xl shadow flex gap-4"
        >
          <div className="w-[56px] h-[56px] relative flex-none">
            <img
              src={card.avatarSrc}
              className="rounded-full relative z-10 object-cover"
              alt=""
            />
            <AvatarBgShape
              className="absolute z-0 top-[-4px] left-[-12px]"
              fill={card.fillColor}
            />
          </div>
          <p className="text-dark-slate font-medium">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export { TestimionalCard };
