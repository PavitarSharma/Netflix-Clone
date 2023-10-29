"use client";

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  required?: boolean;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  id,
  register,
  label,
  type = "text",
  name,
  error,
  required = false,
  ...rest
}: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        {...register(name, { required })}
        {...rest}
        className={`
        w-full
        bg-neutral-700
        px-6 
        pt-6
        pb-1
        appearance-none
        focus:outline-none
        text-white
        focus:ring-0
        rounded-md
        peer
        text-md
        ${error && "border-b-2"}
        ${error && "border-orange-500"}
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
      top-4
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
      {error && (
        <span className="text-orange-500 text-sm p-1">
          {error.message || "This field is required"}
        </span>
      )}
    </div>
  );
};

export default Input;
