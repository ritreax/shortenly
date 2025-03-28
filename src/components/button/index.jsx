import React from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "flex w-fit items-center justify-center gap-3 rounded-lg px-4 py-[10px] cursor-pointer transition-all 200ms",
  variants: {
    variant: {
      primary: "bg-dark-slate text-white hover:bg-black",
      transparent: "text-dark-slate hover:bg-custom-gray",
      menu_btn:
        "text-gunmetal bg-alabaster hover:bg-gunmetal hover:text-alabaster",
      active_menu_btn: "bg-gunmetal text-alabaster",
      
    },

    size: {
      sm: "px-3 py-2 text-sm font-medium",
      md: "px-4 py-[10px] text-md font-medium",
      lg: "px-5 py-4 text-lg font-semibold",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

function Button({ variant, size, children, icon, ...rest }) {
  return (
    <button className={button({ variant, size })} {...rest}>
      {icon}
      {children}
    </button>
  );
}

export { Button };
