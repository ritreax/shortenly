import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Input } from "@Components";

function Url() {
  return (
    <div className="flex gap-4">
      <span className="relative">
        <Input placeholder="https://www.longer-url.com" className="relative" />
        <button className="absolute py-[10px] px-4 bg-white top-0 right-0 rounded-r-lg border-l border-l-custom-gray cursor-pointer font-medium text-dark-slate hover:bg-background transition-all">
          Generate
        </button>
      </span>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2.5 font-semibold text-dark-slate outline-1 shadow-xs outline-custom-gray hover:bg-gray-50 cursor-pointer">
            Select
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Item 1
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Item 2
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Item 3
              </a>
            </MenuItem>
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Item 4
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export { Url };
