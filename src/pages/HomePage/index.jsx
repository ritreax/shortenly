import React from "react";

import { Button } from "@Components";

import PlayButtonIcon from "../../assets/play-button-icon.svg";

import { HeroCard } from "@Components/cards";
import { cards } from "../../components/cards/hero-card/constants";
import { TestimionalCard } from "../../components/cards";

function HomePage() {
  return (
    <>
      <section className="flex items-center justify-center py-16 w-[95%] max-w-screen-2xl  flex-wrap 2xl:flex-nowrap gap-8 ">
        <div className="w-full max-w-[700px] 2xl:max-w-[100%] flex flex-col gap-6 items-center 2xl:items-start text-center 2xl:text-left">
          <h2 className="font-bold text-gunmetal text-[64px] leading-[1.2] max-w-[590px]">
            The best way your URL privacy
          </h2>
          <p className="text-ash-gray font-semibold max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Button variant="primary" icon={<img src={PlayButtonIcon} />}>
            See in action
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6 min-w-[50%] max-w-2xl flex-1">
          {cards.map((card, index) => (
            <HeroCard
              key={card.id}
              {...card}
              className={index === 2 ? "col-span-2 w-full" : "w-full"}
            />
          ))}
        </div>
      </section>

      <section className="w-full py-[148px] custom-gradient flex justify-center">
        <TestimionalCard />
      </section>
    </>
  );
}

export { HomePage };
