import React from "react";
import { tv } from "tailwind-variants";

const textarea = tv({
  base: "bg-white outline outline-custom-gray rounded-lg shadow font-semibold text-gunmetal placeholder:text-stone-gray focus:outline-blue",
  variants: {
    size: {
      md: "px-3 py-[10px]",
    },
    width: {
      md: "w-[550px]",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
    width: "md",
  },
});

function Textarea({ size, width, placeholder = "Placeholder" }) {
  return (
    <textarea placeholder={placeholder} className={textarea({ size, width })} />
  );
}

export { Textarea };
