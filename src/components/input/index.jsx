import React, { useState } from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: "bg-white outline outline-custom-gray rounded-lg shadow font-semibold text-gunmetal placeholder:text-stone-gray focus:outline-blue transition-all",
  variants: {
    variant: {
      file: "hidden",
      input: "w-[550px]",
      icon_input: "px-12 w-full",
    },
    size: {
      md: "px-3 py-[10px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function Input({
  id,
  variant,
  size,
  placeholder,
  type = "input",
  icon,
  ...rest
}) {
  const [fileInfo, setFileInfo] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2),
      });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (variant === "icon_input" && type === "email") {
      setIsValid(value.includes("@") && value.includes("."));
    }
  };

  if (variant === "file") {
    return (
      <div className="w-[400px] flex flex-col items-center">
        <input
          id={id}
          type="file"
          className={input({ variant })}
          onChange={handleFileChange}
          {...rest}
        />
        <label
          htmlFor={id}
          className={`w-full h-[90px] flex items-center justify-center rounded-lg border border-dashed cursor-pointer transition-all ${
            fileInfo
              ? "bg-dark-slate text-white"
              : "border-dark-slate hover:bg-dark-slate hover:text-white"
          }`}
        >
          {fileInfo ? (
            <span>
              {fileInfo.name} ({fileInfo.size} KB)
            </span>
          ) : (
            "Dosya Yükle"
          )}
        </label>
      </div>
    );
  }

  if (variant === "icon_input") {
    return (
      <div className="relative w-full group">
        {icon && (
          <span
            className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors 
            ${isValid ? "text-success" : "text-stone-gray"} 
            group-focus-within:text-blue-500`}
          >
            {icon}
          </span>
        )}
        <input
          placeholder={placeholder}
          type={type}
          className={`${input({ variant, size })} ${
            isValid ? "outline-success" : "outline-stone-gray"
          } `}
          style={{ paddingLeft: "2.5rem" }}
          onChange={handleChange} // Input değiştiğinde e-posta doğrula
          {...rest}
        />
      </div>
    );
  }

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={input({ variant, size })}
      {...rest}
    />
  );
}

export { Input };
