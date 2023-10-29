import React from "react";

interface InputFieldProps {
  id: string;
  error?: boolean;
  success?: boolean;
  label: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  error,
  success,
  label,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type="email"
        className={`
  w-full
  border
  bg-black
  bg-opacity-60
  ${
    error
      ? "border-red-500"
      : success
      ? "border-green-300"
      : "border-neutral-400"
  }
  px-6 
  pt-6
  pb-1
  appearance-none
  focus:outline
  focus:outline-2
  focus:outline-offset-2
  focus:outline-white
  text-white
  focus:${
    error
      ? "border-red-500"
      : success
      ? "border-green-500"
      : "border-neutral-500"
  }
  rounded-md
  peer
  text-md

  `}
        placeholder=" "
      />

      <label
        htmlFor={id}
        className="
absolute
text-zinc-400
duration-150
transform
-translate-y-3
scale-75
top-3
z-10
origin-[0]
left-6
text-md
peer-placeholder-shown:scale-100
peer-placeholder-shown:translate-y-0
peer-focus:scale-75
peer-focus:-translate-y-3
peer-placeholder-shown:text-lg
"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
