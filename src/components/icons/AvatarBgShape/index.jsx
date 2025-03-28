import React from "react";

function AvatarBgShape({ className, fill = "#FFE5E5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="70"
      viewBox="0 0 66 70"
      fill="none"
      className={className}
    >
      <path
        d="M35.278 66.2479C9.13106 83.4909 -7.61264 20.6236 3.83375 7.43102C15.2801 -5.76151 30.0472 0.490065 54.2712 12.5673C78.4953 24.6445 61.425 49.0048 35.278 66.2479Z"
        fill={fill}
      />
    </svg>
  );
}

export { AvatarBgShape };
