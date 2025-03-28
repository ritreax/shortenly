import React from "react";

import { Button } from "@Components";
import { AvatarBgShape } from "@Components/icons";

import PlayButtonIcon from "../../assets/play-button-icon.svg";

function HomePage() {
  return (
    <>
      <section className="flex items-center justify-between py-16 flex-wrap w-[1440px]">
        <div className="w-[780px] flex flex-col gap-6">
          <h2 className="font-bold text-gunmetal text-[64px] leading-20 max-w-[590px]">
            The best way your URL privacy
          </h2>
          <p className="text-ash-gray font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <Button
            variant="primary"
            icon={<img src={PlayButtonIcon} />}
            children="See in action"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="w-[250px] grid gap-4 grid-rows-[170px_230px_180px] ">
            <div className="bg-light-purple flex flex-col items-center justify-center gap-4 relative rounded-lg">
              <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
                <img src="/text-icon.svg" alt="" />
              </div>
              <p className="w-[15ch] text-sm text-center font-medium leading-4 relative z-10">
                Shorten text urls with Shortenly!
              </p>

              <img
                src="/text-icon-xl.svg"
                className="absolute bottom-0 right-0 z-0"
                alt=""
              />
            </div>

            <div className="bg-light-yellow flex flex-col items-center justify-center gap-4 relative rounded-lg">
              <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
                <img src="/camera-icon.svg" alt="" />
              </div>
              <p className="w-[15ch] text-sm text-center font-medium leading-4 relative z-10">
                Shorten video urls with Shortenly!
              </p>

              <img
                src="/camera-icon-xl.svg"
                className="absolute left-0 top-0 z-0"
                alt=""
              />
            </div>

            <div className="bg-light-red flex flex-col items-center justify-center gap-4 relative rounded-lg">
              <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
                <img src="/file-icon.svg" alt="" />
              </div>
              <p className="w-[15ch] text-sm text-center font-medium leading-4 relative z-10">
                Shorten file urls with Shortenly!
              </p>

              <img
                src="/file-icon-xl.svg"
                className="absolute right-0 top-0 z-0"
                alt=""
              />
            </div>
          </div>

          <div className="w-[250px] grid gap-4 grid-rows-[340px_250px">
            <div className="bg-light-blue flex flex-col items-center justify-center gap-4 relative rounded-lg">
              <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
                <img src="/world-icon.svg" alt="" />
              </div>
              <p className="w-[15ch] text-sm text-center font-medium leading-4 relative z-10">
                Shorten your urls with Shortenly!
              </p>

              <img
                src="/world-icon-xl.svg"
                className="absolute right-0 top-50% z-0"
                alt=""
              />
            </div>

            <div className="bg-light-green flex flex-col items-center justify-center gap-4 relative rounded-lg">
              <div className="w-[38px] h-[38px] bg-dark-slate flex items-center justify-center rounded-full relative z-10">
                <img src="/image-icon.svg" alt="" />
              </div>
              <p className="w-[19ch] text-sm text-center font-medium leading-4 relative z-10">
                Shorten image urls with Shortenly!
              </p>

              <img
                src="/image-icon-xl.svg"
                className="absolute left-0 top-50% z-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[240px] py-[148px] w-full custom-gradient flex gap-12">
        <div className="px-6 py-9 bg-white rounded-xl shadow flex gap-4 ">
          <div className="w-[56px] h-[56px] relative flex-none">
            <img
              src="/profile-photo-1.jpg"
              className="rounded-full relative z-10 object-cover"
              alt=""
            />
            <AvatarBgShape className="absolute z-0 top-[-4px] left-[-12px]" />
          </div>
          <p className="text-dark-slate font-medium relative">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            error, inventore cum voluptatem animi unde?
          </p>
        </div>

        <div className="px-6 py-9 bg-white rounded-xl shadow flex gap-4">
          <div className="w-[56px] h-[56px] relative flex-none">
            <img
              src="/profile-photo-1.jpg"
              className="rounded-full relative z-10"
              alt=""
            />
            <AvatarBgShape
              className="absolute z-0 top-[-4px] left-[-12px]"
              fill="#d8dbff"
            />
          </div>
          <p className="text-dark-slate font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            error, inventore cum voluptatem animi unde?
          </p>
        </div>

        <div className="px-6 py-9 bg-white rounded-xl shadow flex gap-4">
          <div className="w-[56px] h-[56px] relative flex-none">
            <img
              src="/profile-photo-1.jpg"
              className="rounded-full relative z-10"
              alt=""
            />
            <AvatarBgShape
              className="absolute z-0 top-[-4px] left-[-12px]"
              fill="#f7e5ff"
            />
          </div>
          <p className="text-dark-slate font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            error, inventore cum voluptatem animi unde?
          </p>
        </div>
      </section>
    </>
  );
}

export { HomePage };
